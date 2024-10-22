const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

document.getElementById("gifForm").addEventListener("submit", fetchGif);
document
  .getElementById("deleteAllBtn")
  .addEventListener("click", deleteAllGifs);

async function fetchGif(e) {
  e.preventDefault();
  const tag = e.target.searchline.value;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`
    );
    const data = await response.json();
    displayGif(data.data.images.original.url);
    e.target.reset();
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

function displayGif(url) {
  const gifContainer = document.getElementById("gifContainer");
  const gifDiv = document.createElement("div");

  const gifImg = document.createElement("img");
  gifImg.src = url;
  gifDiv.appendChild(gifImg);

  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.onclick = () => gifDiv.remove();
  gifDiv.appendChild(delButton);

  gifContainer.appendChild(gifDiv);
}

function deleteAllGifs() {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = "";
}
