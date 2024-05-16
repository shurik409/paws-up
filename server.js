const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("./mongodb");
const { MongoClient, ServerApiVersion } = require("mongodb");
const WebSocket = require("ws");
const http = require("http");
const { decrypt } = require("./utils/crypt");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware для разрешения CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешить доступ с любых источников
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Создаем HTTP сервер
const server = http.createServer(app);

// Настраиваем WebSocket сервер на основе HTTP сервера
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => {
    console.log("received: %s", message);
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// URL-адрес кластера MongoDB
const uri =
  "mongodb+srv://shurik409:hTnzJd74uT8cQaRy@pawsupcluster.omeirb9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client
  .connect()
  .then((mongoClient) => {
    app.locals.db = mongoClient;
    const db = client.db("PawsUpAuction");
    const collection = db.collection("Auction");

    // Использование Change Streams для отслеживания изменений
    const changeStream = collection.watch();
    changeStream.on("change", (change) => {
      // console.log("Document changed: ", change);
      // Отправка изменений всем подключенным клиентам
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          if (change.fullDocument.paint) {
            client.send(JSON.stringify(change.fullDocument.paint));
          }
        }
      });
    });
  })
  .catch((err) => console.error(err.stack));

const endtime = "2024-05-17T17:48+03:00"; //YYYY-MM-DDTHH:mm:ss.sssZ

const reactBuild = path.join(__dirname, "build");
app.use(express.static(reactBuild));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/auction/", function (request, response) {
  response.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/auction/lot/:id", function (request, response) {
  const ids = ["1", "2", "3", "4", "5", "6", "7"];
  if (ids.includes(request.params.id)) {
    response.sendFile(path.join(__dirname + "/build/index.html"));
    return;
  }
  response.sendStatus(404);
});

app.get("/auction/results/:id", function (request, response) {
  const ids = ["1", "2", "3", "4", "5", "6", "7"];
  if (ids.includes(request.params.id)) {
    response.sendFile(path.join(__dirname + "/build/index.html"));
    return;
  }
  response.sendStatus(404);
});

app.get("/api/maxvalue/:id", async function (request, response) {
  const users = await mongodb.getUsers(request, request.params.id);
  if (users?.length) {
    const max = users.reduce(function (prev, current) {
      return prev.money > current.money ? prev : current;
    });
    response.status(200).json({ max: max });
  } else {
    response.status(200).json({ max: { name: "", money: 0 } });
  }
});

app.get("/api/auction/open", async function (request, response) {
  const endDate = new Date(endtime);
  const currentDate = new Date();

  const isAuctionEnd = endDate - currentDate < 0;

  response.status(200).json({ isAuctionEnd, endDate });
});

app.get("/api/info/:id", async function (request, response) {
  const results = await mongodb.getUsers(request, request.params.id);

  response.status(200).json(results);
});

app.post("/api/auction/:id/user/", async function (request, response) {
  if (!request.body) {
    response.status(400).json({ message: "error" });
  } else {
    const users = await mongodb.getUsers(request, request.params.id);
    const decName = request.body.name && decrypt(request.body.name);
    const decPhone = request.body.phone && decrypt(request.body.phone);
    let max = 0;
    if (users?.length && decName && decPhone) {
      max = users
        .filter((user) => user.name === decName && user.phone === decPhone)
        .reduce(function (prev, current) {
          return prev.money > current.money ? prev : current;
        });
    }
    response.status(200).json({ max: max });
  }
});

app.post("/api/auction", async function (request, response) {
  if (!request.body) {
    response.status(400).json({ message: "error" });
  } else {
    await mongodb.addUser(request, request.body);
    response.status(200).json({ message: "success" });
  }
});

// Запуск сервера на заданном порту
server.listen(PORT, () => console.log("server is running on " + PORT));
