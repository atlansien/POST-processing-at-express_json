const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    message: "メッセージが出力されます",
    date: "入力した時刻を表示します"
  });
});

app.post("/", (req, res) => {
  res.render("index", {
    message: req.body.message,
    date: moment().format("YYYY年MM月DD日HH時mm分ss秒")
  });
});

app.listen(PORT, () => {
  console.log(`Exmample app listening on port ${PORT}`);
});
