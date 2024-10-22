const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;
const quizRouter = require("./routes/quiz");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

app.use("/quiz", quizRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
