import express from "express";
import {
  createBook,
  getAllBooks,
  getBookByID,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookByID);
router.post("/books", createBook);

export default router;
