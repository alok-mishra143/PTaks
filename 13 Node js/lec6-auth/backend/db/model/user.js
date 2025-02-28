const mongoose = require("mongoose");

const UserSchmema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("url", UserSchmema);

module.exports = User;
