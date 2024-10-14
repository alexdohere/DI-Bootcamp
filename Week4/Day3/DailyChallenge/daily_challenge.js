// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet
// - each class containing a different background-color).
// Finally append each div to the <section> in the HTML

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let planetColors = [
  "gray",
  "yellow",
  "blue",
  "red",
  "orange",
  "lightgoldenrodyellow",
  "lightblue",
  "darkblue",
];

let moons = [
  [],
  [],
  ["Moon"],
  ["Phobos", "Deimos"],
  ["Io", "Europa", "Ganymede", "Callisto"],
  ["Titan", "Rhea", "Iapetus"],
  ["Miranda", "Ariel", "Umbriel"],
  ["Triton"],
];

function createPlanets(planet, planetColor, moonArray) {
  let planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.textContent = planet;
  planetDiv.style.backgroundColor = planetColor;
  planetDiv.style.position = "relative";
  document.querySelector(".listPlanets").appendChild(planetDiv);

  moonArray.forEach((moon) => {
    let moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    moonDiv.textContent = moon;
    moonDiv.style.top = `${Math.random() * 50 + 20}px`;
    moonDiv.style.left = `${Math.random() * 50 + 20}px`;
    planetDiv.appendChild(moonDiv);
  });
}

for (let i = 0; i < planets.length; i++) {
  createPlanets(planets[i], planetColors[i], moons[i]);
}
