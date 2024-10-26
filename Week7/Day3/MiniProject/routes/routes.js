import express from "express";
import {
  deleteTaskByID,
  getAllTasks,
  getTaskByID,
  saveNewTask,
  updateTaskByID,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskByID);
router.post("/tasks", saveNewTask);
router.put("/tasks/:id", updateTaskByID);
router.delete("/tasks/:id", deleteTaskByID);

export default router;
