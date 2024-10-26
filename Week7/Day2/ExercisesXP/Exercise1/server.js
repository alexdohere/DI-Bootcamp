import express from "express";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
