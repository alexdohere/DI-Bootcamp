const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
];
let currentId = books.length + 1;

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

app.post("/api/books", (req, res) => {
  const newBook = { id: currentId++, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
