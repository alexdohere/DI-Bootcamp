// Using a DOM property, retrieve the h1 and console.log it.

let elementH1 = document.querySelector("h1");
console.log(elementH1);

// Using DOM methods, remove the last paragraph in the <article> tag.

let lastParagraph = document.querySelector("article").lastElementChild;
lastParagraph.remove();

// Add an event listener which will change the background color of the h2 to red when it’s clicked on.

let elementH2 = document.querySelector("h2");
elementH2.addEventListener("click", () => {
  elementH2.style.background = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let elementH3 = document.querySelector("h3");
elementH3.addEventListener("click", () => {
  elementH3.style.display = "none";
});

// Add a <button> to the HTML file that, when clicked, should make the text of all paragraphs bold.

let button = document.createElement("button");
button.innerHTML = "Make Text Bold";
document.body.append(button);

button.addEventListener("click", () => {
  let paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});

// BONUS: When you hover on the h1, set the font size to a random pixel size between 0 to 100.

elementH1.addEventListener("mouseover", () => {
  let number = Math.floor(Math.random() * 101);
  elementH1.style.fontSize = `${number}px`;
});

// BONUS: When you hover on the 2nd paragraph, it should fade out.

let elementP2 = document.querySelectorAll("p")[1];

elementP2.addEventListener("mouseover", () => {
  elementP2.style.opacity = "0";
});

elementP2.addEventListener("mouseout", () => {
  elementP2.style.opacity = "1";
});
