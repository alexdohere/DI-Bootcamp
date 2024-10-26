import {
  _getAllUsers,
  _getUserByID,
  _loginUser,
  _registerNewU,
  _updateUserByID,
} from "../models/model.js";

export const registerNewU = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const newUser = await _registerNewU(
      email,
      username,
      first_name,
      last_name,
      password
    );
    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await _loginUser(username, password);
    res.status(200).json({ message: "Login successful", user });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await _getAllUsers();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getUserByID(parseInt(id));
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { email, first_name, last_name } = req.body;
  try {
    const updatedUser = await _updateUserByID(
      parseInt(id),
      first_name,
      last_name,
      email
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
