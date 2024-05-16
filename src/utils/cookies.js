import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const SECRET_KEY = "heyPawsUpCookies";

const encrypt = (value) => {
  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
};

export const decrypt = (encryptedValue) => {
  const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const setEncryptedCookie = (name, value, options = {}) => {
  const encryptedValue = encrypt(value);
  Cookies.set(name, encryptedValue, options);
  return value; // обновление состояния для рендеринга
};

export const getEncryptedCookie = (name) => {
  const encryptedValue = Cookies.get(name);
  if (encryptedValue) {
    try {
      return decrypt(encryptedValue);
    } catch (error) {
      console.error("Error decrypting cookie:", error);
      return null;
    }
  }
  return null;
};

export const getCookie = (name) => {
  const encryptedValue = Cookies.get(name);
  return encryptedValue;
};


