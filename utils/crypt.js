const CryptoJS = require("crypto-js");

const SECRET_KEY = "heyPawsUpCookies";

const encrypt = (value) => {
  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
};

const decrypt = (encryptedValue) => {
  const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };
