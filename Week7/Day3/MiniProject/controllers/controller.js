import {
  _deleteTaskByID,
  _getAllTasks,
  _getTaskByID,
  _saveNewTask,
  _updateTaskByID,
} from "../models/model.js";

const fileName = "./config/tasks.json";

export const saveNewTask = (req, res) => {
  const data = req.body;
  try {
    const result = _saveNewTask(data, fileName);
    if (result) {
      res.status(200).json({ data, message: "Task added successfully" });
    } else {
      res.json({ data, message: "Task with this ID already exists" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong with writing" });
  }
};

export const getAllTasks = (req, res) => {
  try {
    const data = _getAllTasks(fileName);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTaskByID = (req, res) => {
  const { id } = req.params;
  try {
    const data = _getTaskByID(id, fileName);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateTaskByID = (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  try {
    const data = _updateTaskByID(id, task, status, fileName);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteTaskByID = (req, res) => {
  const { id } = req.params;
  try {
    const data = _deleteTaskByID(id, fileName);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
