require("dotenv").config();

const User = require("../db/model/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { Name, Email, Password } = req.body;
  if (!Name || !Email || !Password) {
    return res
      .status(400)
      .json({ error: "Please provide name, email, and password" });
  }

  try {
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcryptjs.hash(Password, 10);

    const newUser = await User.create({
      Name,
      Email,
      Password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.AUTH_SECRETE, {
      expiresIn: "1h",
    });

    res.cookie("Token", token, {
      httpOnly: true,
      secure: process.env.AUTH_SECRETE,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ error: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcryptjs.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.AUTH_SECRETE, {
      expiresIn: "1h",
    });

    res.cookie("Token", token, {
      httpOnly: true,
      secure: process.env.AUTH_SECRETE,
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

async function LogOut(req, res) {
  res.clearCookie("Token");
  return res.status(200).json({ message: "Logged out successfully" });
}

async function ChangeDetail(req, res) {
  const { Name } = req.body;
  const { id } = req.params;
  if (!Name) {
    return res.status(400).json({ error: "Please provide name" });
  }
  try {
    const user = await User.findByIdAndUpdate(id, { Name }, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createUser, loginUser, LogOut, ChangeDetail };
