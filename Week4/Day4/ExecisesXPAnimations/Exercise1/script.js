// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function sayHelloWorld() {
  alert("Hello World");
}
setTimeout(sayHelloWorld, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container>.

let divContainer = document.getElementById("container");

function addNewParagraph() {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Hello World";
  divContainer.appendChild(newParagraph);
}
setTimeout(addNewParagraph, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
// as soon as there will be 5 paragraphs inside the <div id="container">.

let intervalId = setInterval(function () {
  addNewParagraph();

  if (divContainer.getElementsByTagName("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

document.getElementById("clear").addEventListener("click", function () {
  clearInterval(intervalId);
});
