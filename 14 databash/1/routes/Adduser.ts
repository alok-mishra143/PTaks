import express from "express";

import { AddUser, GetUsers, DeleteUser } from "../controller/db";
const router = express.Router();

router.post("/", AddUser);
router.get("/", GetUsers);
router.delete("/:id", DeleteUser);

export default router;
