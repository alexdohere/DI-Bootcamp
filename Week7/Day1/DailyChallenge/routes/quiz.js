const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get("/", (req, res) => {
  req.session.score = req.session.score || 0;
  req.session.questionIndex = req.session.questionIndex || 0;

  if (req.session.questionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[req.session.questionIndex].question });
  } else {
    res.json({
      message: "Quiz finished! Please go to /quiz/score to see your score.",
    });
  }
});

router.post("/", (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[req.session.questionIndex];

  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    req.session.score += 1;
    res.json({ message: "Correct!", next: true });
  } else {
    res.json({
      message: "Incorrect! The correct answer was: " + currentQuestion.answer,
      next: true,
    });
  }

  req.session.questionIndex += 1;
});

router.get("/score", (req, res) => {
  res.json({ score: req.session.score });
  req.session.destroy();
});

module.exports = router;
