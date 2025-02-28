const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  LogOut,
} = require("../controllers/userControllers");

router.post("/register", createUser);
router.get("/login", loginUser);
router.get("/logout", LogOut);

module.exports = router;
