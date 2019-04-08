const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt_round = 10;
fs = require("fs");
const secret = fs.readFileSync("jwtRS256.key");
users = undefined;

const get_hash = username => {
  hash = users.getAll().filter(value => {
    return value.login === username;
  });
  if (hash.length > 0) {
    return hash[0].password;
  } else {
    return undefined;
  }
};

const login = (username, password) => {
  hash = get_hash(username);
  if (hash != undefined && bcrypt.compareSync(password, hash)) {
    return jwt.sign(username, secret, { algorithm: "HS256" });
  } else {
    return false;
  }
};

const verifyacess = token => {
  try {
    const decoded = jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
};

module.exports = model => {
  users = model;
  return { login, verifyacess };
};
