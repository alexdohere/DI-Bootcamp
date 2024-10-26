import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
