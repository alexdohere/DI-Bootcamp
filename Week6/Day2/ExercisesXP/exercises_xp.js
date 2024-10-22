// Exercise 1 : Giphy API
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.

// const fetchGifs = async () => {
//   const url = "https://api.giphy.com/v1/gifs/search";
//   const params = new URLSearchParams({
//     q: "hilarious",
//     rating: "g",
//     api_key: "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
//   });

//   try {
//     const response = await fetch(`${url}?${params}`);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// };

// fetchGifs();

// Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query = "sun";
const limit = 10;
const offset = 2;

const fetchGifs = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&api_key=${apiKey}`
  );
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return await response.json();
};

const displayGifs = (data) => {
  const gifContainer = document.getElementById("gifs");
  gifContainer.innerHTML = "";
  data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    gifContainer.appendChild(img);
  });
};

const init = async () => {
  try {
    const gifData = await fetchGifs();
    displayGifs(gifData);
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
};

init();

// Exercise 3 : Async function
// Instructions
// Improve the program below :
//
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

const getStarship = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const { result } = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

getStarship();

// Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?
//
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }
//
// asyncCall();
//
// ANSWER: calling, after 2 seconds - resolved
