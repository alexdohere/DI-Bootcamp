import express from "express";
import {
  getAllUsers,
  getUserByID,
  loginUser,
  registerNewU,
  updateUserByID,
} from "../controllers/controller.js";

const router = express.Router();

router.post("/register", registerNewU);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserByID);
router.put("/users/:id", updateUserByID);

export default router;
