const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🎉", name: "Party Popper" },
];

let scores = [];

const getRandomEmoji = () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [randomEmoji.name];

  while (options.length < 4) {
    const distractor = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(distractor)) {
      options.push(distractor);
    }
  }

  options.sort(() => Math.random() - 0.5);
  return { emoji: randomEmoji.emoji, name: randomEmoji.name, options };
};

app.get("/api/question", (req, res) => {
  const question = getRandomEmoji();
  res.json(question);
});

app.post("/api/guess", (req, res) => {
  const { name, score } = req.body;
  const correct = emojis.find((e) => e.name === name);

  if (correct) {
    scores.push(score);
    res.json({ correct: true, score });
  } else {
    res.json({ correct: false });
  }
});

app.get("/api/leaderboard", (req, res) => {
  const leaderboard = scores.sort((a, b) => b - a).slice(0, 10);
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
