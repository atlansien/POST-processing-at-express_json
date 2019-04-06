const express = require("express");
const moment = require("moment");

const router = express.Router();

router
  .get("/", (req, res) => {
    res.render("index", {
      message: "メッセージが出力されます",
      date: "入力した時刻を表示します"
    });
  })

  .post("/", (req, res) => {
    res.render("index", {
      message: req.body.message,
      date: moment().format("YYYY年MM月DD日HH時mm分ss秒")
    });
  });

module.exports = router;
