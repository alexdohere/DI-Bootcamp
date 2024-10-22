const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let posts = [];
let currentId = 1;

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
});

app.post("/posts", (req, res) => {
  const post = {
    id: currentId++,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.status(201).json(post);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send("Post not found");
  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
