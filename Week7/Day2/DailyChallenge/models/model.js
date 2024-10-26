import { db } from "../config/data.js";
import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const checkPass = async (password, hashedPass) => {
  return await bcrypt.compare(password, hashedPass);
};

export const _registerNewU = async (username, password) => {
  try {
    password = await hashPassword(password);
    const trx = await db.transaction();

    const [{ id }] = await db("hashpwd")
      .insert({ username, password }, ["id"])
      .transacting(trx);
    await db("users").insert({ id, username }, ["username"]).transacting(trx);

    await trx.commit();
    console.log(`User ${username} created successfully`);
  } catch (e) {
    console.log("User not created");
    console.log(e);
    await trx.rollback();
    throw e;
  }
};

export const _loginUser = async (username, passwordInput) => {
  try {
    const result = await db("hashpwd")
      .select("password")
      .where({ username })
      .first();
    const passwordHash = result.password;
    return checkPass(passwordInput, passwordHash);
  } catch (e) {
    console.log("Some error, user not found?");
    throw e;
  }
};

export const _getAllUsers = () => {
  return db("users").select(
    "id",
    "email",
    "username",
    "first_name",
    "last_name"
  );
};

export const _getUserByID = async (id) => {
  const data = await db("users")
    .select("id", "email", "username", "first_name", "last_name")
    .where({ id })
    .first();
  if (!data) {
    throw new Error("No such user");
  }
  return data;
};

export const _updateUserByID = (id, email, first_name, last_name) => {
  return db("users")
    .update({ email, first_name, last_name }, [
      "id",
      "email",
      "username",
      "first_name",
      "last_name",
    ])
    .where({ id });
};
