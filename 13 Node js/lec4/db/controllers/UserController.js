const user = require("../models/user");

async function handleAllUser(req, res) {
  try {
    const result = await user.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function CreateUser(req, res) {
  try {
    const body = req.body;

    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.jobTitle ||
      !body.gender
    )
      return res.status(400).json({ meassage: "All feild are require" });

    const Created_User = await user.create(body);
    res.status(201).send(Created_User);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function GetById(req, res) {
  try {
    const id = req.params.id;

    const result = await user.findById(id);

    // ✅ Handle case where user is not found
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(error); // ✅ Log error for debugging
    res.status(500).json({ error: "Error fetching user" });
  }
}

async function UpdateUserById(req, res) {
  try {
    const id = req.params.id;
    const newData = req.body;
    const result = await user.updateOne(
      { _id: id },
      {
        $set: newData,
      }
    );

    if (!result) return res.status(400).send({ meassage: "User NOT found" });
    return res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function DeleteUserById(req, res) {
  try {
    const id = req.params.id;
    const result = await user.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ meassage: "user Not found" });
    return res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
}

module.exports = {
  handleAllUser,
  CreateUser,
  GetById,
  UpdateUserById,
  DeleteUserById,
};
