const User = require("../db/model/user");

async function GetUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error("Error getting user by id:", error);
    return null;
  }
}

module.exports = { GetUserById };
