import express from "express";
import path from "path";
import {
  getAllUsers,
  getUserByID,
  loginUser,
  registerNewU,
  updateUserByID,
} from "../controllers/controller.js";

const router = express.Router();

router.use(express.static(path.resolve("./public")));
router.get("/register", (req, res) => {
  res.sendFile(path.resolve("./public/register.html"));
});
router.post("/register", registerNewU);

router.get("/login", (req, res) => {
  res.sendFile(path.resolve("./public/login.html"));
});
router.post("/login", loginUser);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserByID);
router.put("/users/:id", updateUserByID);

export default router;
