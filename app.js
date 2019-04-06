const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    message: "メッセージが出力されます"
  });
});

app.post("/", (req, res) => {
  res.render("index", {
    message: req.body.message
  });
});
