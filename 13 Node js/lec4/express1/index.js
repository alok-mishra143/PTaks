const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from home page");
});

app.get("/about", (req, res) => {
  res.send("hello from about page");
});

app.get("/login", (req, res) => {
  res.send("hello from login page");
});

app.listen(3000);
