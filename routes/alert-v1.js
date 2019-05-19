const express = require("express");
const router = express.Router();

const alert = require("../model/alert");
alertModel = undefined;

router.post("/alerts", (req, res, next) => {
  alertModel.add(res.body.alert, err => {
    if (err) {
      res.status(405).json({ message: "Invalid input" });
    } else {
      res.status(200).json({ message: "sucefull operation" });
    }
  });
});

router.get("/alerts/:id", (req, res, next) => {
  alertModel.get(req.params.id, (err, res) => {
    if (err) {
      res.status(404).json({ message: "Alert not found" });
    } else {
        res.status(200).json(res);
    }
  });
});
