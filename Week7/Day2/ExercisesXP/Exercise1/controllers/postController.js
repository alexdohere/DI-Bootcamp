import * as PostModel from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel._getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel._getPostById(id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await PostModel._createPost(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await PostModel._updatePost(id, title, content);
    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await PostModel._deletePost(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
