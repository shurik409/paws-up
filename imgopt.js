/**
 * Конвертирует все PNG/JPG в WebP, сохраняя структуру подпапок.
 * Каждый файл вида:
 *   public/images/home/pets/1.png
 * становится:
 *   public/images/home/pets/1.webp
 * (в той же подпапке, рядом с оригиналом).
 *
 * Установка:
 *   npm install sharp --save-dev
 *
 * Запуск (dry-run по умолчанию НЕ делает, сразу конвертирует):
 *   node convert-to-webp.js ./public/images/home
 *
 * Чтобы удалить оригиналы PNG/JPG после успешной конвертации, добавьте флаг --delete-originals:
 *   node convert-to-webp.js ./public/images/home --delete-originals
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const targetDir = process.argv[2] || "./public/images/home";
const deleteOriginals = process.argv.includes("--delete-originals");

const IMAGE_EXT = [".png", ".jpg", ".jpeg"];

let totalBefore = 0;
let totalAfter = 0;
let count = 0;
const converted = []; // { from, to } — пригодится для замены путей в коде

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXT.includes(ext)) return;

  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  // Если webp уже существует и свежее оригинала — пропускаем
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`= ${filePath} (webp уже существует, пропускаем)`);
      return;
    }
  }

  const before = fs.statSync(filePath).size;

  try {
    await sharp(filePath)
      .webp({ quality: 82 })
      .toFile(webpPath);

    const after = fs.statSync(webpPath).size;
    totalBefore += before;
    totalAfter += after;
    count++;

    console.log(
      `✔ ${filePath} → ${webpPath}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
    );

    converted.push({ from: filePath, to: webpPath });

    if (deleteOriginals) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`✖ Ошибка на ${filePath}:`, err.message);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      await convertFile(fullPath);
    }
  }
}

(async () => {
  if (!fs.existsSync(targetDir)) {
    console.error(`Папка не найдена: ${targetDir}`);
    process.exit(1);
  }

  console.log(`Конвертация в WebP: ${targetDir}`);
  console.log(deleteOriginals ? "Оригиналы будут удалены после конвертации.\n" : "Оригиналы останутся на месте.\n");

  await walk(targetDir);

  console.log(`\nГотово. Сконвертировано файлов: ${count}`);
  if (totalBefore > 0) {
    const savedPercent = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
    console.log(
      `Было: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → Стало: ${(totalAfter / 1024 / 1024).toFixed(2)}MB (−${savedPercent}%)`
    );
  }

  // Сохраняем список конвертированных файлов — пригодится для замены путей в коде
  if (converted.length > 0) {
    fs.writeFileSync(
      "converted-files.json",
      JSON.stringify(converted, null, 2)
    );
    console.log(`\nСписок конвертированных файлов сохранён в converted-files.json`);
  }
})();