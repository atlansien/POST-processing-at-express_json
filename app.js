const express = require("express");
const router = require("./router/route");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Exmample app listening on port ${PORT}`);
});
