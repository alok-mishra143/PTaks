const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

// Enable CORS (Optional: If needed for external connections)
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (Change this to a specific URL if needed)
    methods: ["GET", "POST"],
  },
});

// Serve static files from "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start server
server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});

// Socket.io connection handling
io.on("connection", (socket) => {
  console.log(`⚡ User connected: ${socket.id}`);

  // Listen for messages from clients
  socket.on("umessage", (msg) => {
    console.log(`📩 Message received: ${msg}`);
    io.emit("smessage", msg);
    io.emit("uid", socket.id);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});
