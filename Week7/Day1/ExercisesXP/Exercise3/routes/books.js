const express = require("express");
const router = express.Router();

let books = [];
let currentId = 1;

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const book = {
    id: currentId++,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  };
  books.push(book);
  res.status(201).json(book);
});

router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.status(204).send();
});

module.exports = router;
