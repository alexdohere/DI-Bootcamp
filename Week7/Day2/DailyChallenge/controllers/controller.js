import {
  _getAllUsers,
  _getUserByID,
  _loginUser,
  _registerNewU,
  _updateUserByID,
} from "../models/model.js";
import bcrypt from "bcrypt";

export const registerNewU = async (req, res) => {
  const { username, password } = req.body;
  try {
    await _registerNewU(username, password);
    res.status(200).json({ message: "User created successfully!" });
  } catch (e) {
    res.status(500).json({ message: "Hmmm, some error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await _loginUser(username, password);
    res.status(200).json({ isLogged: `${data}` });
  } catch (e) {
    res.status(500).json({ message: "Hmmm, some error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await _getAllUsers();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Hmmm, some error" });
  }
};

export const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getUserByID(id);
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: "No such user" });
  }
};

export const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { email, first_name, last_name } = req.body;
  try {
    const data = await _updateUserByID(id, email, first_name, last_name);
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: "No such user" });
  }
};
