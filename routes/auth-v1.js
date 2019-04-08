const express = require("express");
const router = express.Router();
const loger = require("../model/idp");
usersModel = undefined;
loggerModel = undefined;

router.post("/login", (req, res, next) => {
    username = req.body.login;
    password = req.body.password;
    if(username && password) {
        const token = loggerModel.login(username, password)
        if(token){
            res.status(200).json({message: "Ok", token: token})
        } else {
            res.status(401).json({message: "Unauthorized"})
        }
    }
    else {
        res.status(401).json({message: "Unauthorized"})
    }
});

router.get("/verifyacess", (req, res, next) => {
    const acess = loggerModel.verifyacess(req.body.token)
    if(acess) {
        res.status(200).json({message: "Ok"})
    } else {
        res.status(401).json({message: "Unauthorized"})
    }
})
module.exports = (user, logger) => {
  usersModel = user;
  loggerModel = logger;
  return router;
};
