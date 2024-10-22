const express = require("express");
const router = express.Router();

let todos = [];
let currentId = 1;

router.get("/", (req, res) => {
  res.json(todos);
});

router.post("/", (req, res) => {
  const todo = { id: currentId++, text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

router.put("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);
  if (todo) {
    todo.text = req.body.text;
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

router.delete("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== todoId);
  res.status(204).send();
});

module.exports = router;
