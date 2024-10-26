import { db } from "../config/data.js";
import bcrypt from "bcrypt";

export const _registerNewU = async (
  email,
  username,
  first_name,
  last_name,
  password
) => {
  const existingUser = await db("users")
    .where("username", username)
    .orWhere("email", email)
    .first();

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [newUser] = await db("users")
    .insert({
      email,
      username,
      first_name,
      last_name,
      password: hashedPassword,
    })
    .returning("*");

  return newUser;
};

export const _loginUser = async (username, password) => {
  const user = await db("users").where("username", username).first();

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return user;
};

export const _getAllUsers = async () => {
  return await db("users").select("*");
};

export const _getUserByID = async (id) => {
  const user = await db("users").where("id", id).first();
  if (!user) throw new Error("No such user");
  return user;
};

export const _updateUserByID = async (id, first_name, last_name, email) => {
  const updatedUser = await db("users")
    .where("id", id)
    .update({ first_name, last_name, email })
    .returning("*");

  if (!updatedUser) throw new Error("No such user");
  return updatedUser[0];
};
