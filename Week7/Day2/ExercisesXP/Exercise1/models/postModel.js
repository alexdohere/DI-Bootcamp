import { db } from "../config/db.js";

export const _getAllPosts = async () => {
  const posts = await db("posts")
    .select("id", "title", "content")
    .orderBy("id");
  return posts;
};

export const _getPostById = async (id) => {
  const post = await db("posts")
    .select("id", "title", "content")
    .where({ id })
    .first();
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

export const _createPost = async (title, content) => {
  const [newPost] = await db("posts").insert({ title, content }, [
    "id",
    "title",
    "content",
  ]);
  return newPost;
};

export const _updatePost = async (id, title, content) => {
  const [updatedPost] = await db("posts")
    .where({ id })
    .update({ title, content }, ["id", "title", "content"]);
  if (!updatedPost) {
    throw new Error("Post not found");
  }
  return updatedPost;
};

export const _deletePost = async (id) => {
  const [deletedPost] = await db("posts")
    .where({ id })
    .del()
    .returning(["id", "title", "content"]);
  if (!deletedPost) {
    throw new Error("Post not found");
  }
  return deletedPost;
};
