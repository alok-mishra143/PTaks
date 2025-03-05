import express from "express";
import router from "./routes/Adduser";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/user", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
