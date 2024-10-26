import { db } from "../config/db.js";

export const _getAllBooks = async () => {
  return db("books").select("id", "title", "author", "publishedYear");
};

export const _getBookByID = async (id) => {
  const data = await db("books").where({ id }).first();
  if (!data) {
    throw new Error("No such book");
  }
  return data;
};

export const _createBook = async (title, author, publishedYear) => {
  return db("books").insert({ title, author, publishedYear }, [
    "id",
    "title",
    "author",
    "publishedYear",
  ]);
};
