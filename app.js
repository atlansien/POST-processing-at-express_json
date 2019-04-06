const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/route");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Exmample app listening on port ${PORT}`);
});
