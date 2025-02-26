const express = require("express");
const router = express.Router();
const user = require("../models/user");
const {
  handleAllUser,
  CreateUser,
  GetById,
  UpdateUserById,
  DeleteUserById,
} = require("../controllers/UserController");

router.get("/users", async (req, res) => {
  const users = await user.find({});
  const html = `
      <ul>
      ${users.map((u) => `<li>${u.first_name}</li>`).join("")}
      </ul>`;

  res.send(html);
});

router.route("/").get(handleAllUser).post(CreateUser);

router.route("/:id").get(GetById).patch(UpdateUserById).delete(DeleteUserById);

module.exports = router;
