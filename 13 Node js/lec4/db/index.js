const express = require("express");
const app = express();
const UserRoute = require("./routes/userRoute");
const { ConnectTodb } = require("./database/db");
const { ReqLogs } = require("./middleware/index");

const PORT = 3000;
app.use(express.json());
app.use(ReqLogs("test.txt"));

// connect to mongodb
ConnectTodb("mongodb://localhost:27017/nodejs");

// routes

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", UserRoute);

app.listen(PORT, () =>
  console.log(`app is listining on http://localhost:${PORT}`)
);
