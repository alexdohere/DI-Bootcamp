// Get the value of each of the inputs in the HTML file when the form is submitted.
//  Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
//
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed
// (but keep the values entered by the user).
// The user could click the button at least three times and get a new story. Display the stories randomly.

let myForm = document.getElementById("libform");

let nounElement = document.getElementById("noun");
let adjectiveElement = document.getElementById("adjective");
let personElement = document.getElementById("person");
let verbElement = document.getElementById("verb");
let placeElement = document.getElementById("place");
let storyElement = document.getElementById("story");

function checkIfEmpty(word) {
  return word !== "";
}

function createStory() {
  const mainStory = `${personElement.value} found a ${adjectiveElement.value} ${nounElement.value} while ${verbElement.value} in the ${placeElement.value}.`;
  storyElement.textContent = mainStory;
}

const randomStories = [
  `${personElement.value} was exploring a ${adjectiveElement.value} ${placeElement.value} when they discovered a ${nounElement.value}. It was a thrilling moment!`,
  `In the ${adjectiveElement.value} ${placeElement.value}, ${personElement.value} decided to ${verbElement.value} a ${nounElement.value}. It turned out to be quite an adventure!`,
  `While ${verbElement.value} in the ${placeElement.value}, ${personElement.value} stumbled upon a ${adjectiveElement.value} ${nounElement.value}. It changed everything!`,
];

function generateStory(event) {
  event.preventDefault();
  if (
    checkIfEmpty(nounElement.value) &&
    checkIfEmpty(adjectiveElement.value) &&
    checkIfEmpty(personElement.value) &&
    checkIfEmpty(verbElement.value) &&
    checkIfEmpty(placeElement.value)
  ) {
    createStory();

    let buttonShuffle = document.createElement("button");
    buttonShuffle.innerText = "Shuffle";
    buttonShuffle.style.display = "block";
    document.querySelector("p").append(buttonShuffle);
    buttonShuffle.addEventListener("click", function () {
      let randomIndex = Math.floor(Math.random() * randomStories.length);
      storyElement.textContent = randomStories[randomIndex];
    });
  } else {
    alert("All fields must be filled in!");
  }
}

myForm.addEventListener("submit", generateStory);
