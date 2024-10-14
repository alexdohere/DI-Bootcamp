let currentColor = "black";
let coloring = false;

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
];
const palette = document.getElementById("palette");

colors.forEach((color) => {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color");
  colorDiv.style.backgroundColor = color;
  colorDiv.addEventListener("click", () => {
    currentColor = color;
  });
  palette.appendChild(colorDiv);
});

const canvas = document.getElementById("canvas");

for (let i = 0; i < 25; i++) {
  for (let j = 0; j < 60; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      if (coloring) {
        square.style.backgroundColor = currentColor;
      }
    });
    canvas.appendChild(square);
  }
}

canvas.addEventListener("mousedown", () => {
  coloring = true;
});
canvas.addEventListener("mouseup", () => {
  coloring = false;
});

document.getElementById("buttonClear").addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
