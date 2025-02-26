// mongodb://localhost:27017
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow");
});

app.post("/users", (req, res) => {
  console.log(req.body); // Logs request body

  res.status(200).send(req.body); // Sends back the received body
});

app.listen(3000, () => {
  console.log("server is runnning on http://localhost:3000");
});
