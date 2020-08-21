const express = require("express");
const mysql = require("mysql");
const redis = require("redis");
const config = {
  host: "127.0.0.1",
  port: 6379,
};

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
