import express from "express";
import router from "./routes/routes.js";

const app = express();
const PORT = 3012;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
