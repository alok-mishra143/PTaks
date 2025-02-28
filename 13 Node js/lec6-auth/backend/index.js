require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { ConnectTodb } = require("./db/db");
const authMiddleware = require("./middleware/Protected");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { GetUserById } = require("./server/action");

const userRoutes = require("./routes/user");

ConnectTodb(process.env.MONGO_URL);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use("/users", userRoutes);
app.use("/dashboard", async (req, res) => {
  const token = req.cookies?.Token;
  const id = jwt.verify(token, process.env.AUTH_SECRETE).id;
  const user = await GetUserById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res
    .status(200)
    .json({ message: "Welcome to the dashboard", user: user.Name });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
