document
  .getElementById("fetchCharacterBtn")
  .addEventListener("click", fetchCharacter);

async function fetchCharacter() {
  const loading = document.getElementById("loading");
  const characterInfo = document.getElementById("characterInfo");

  loading.style.display = "block";
  characterInfo.innerHTML = "";

  try {
    const randomId = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(
      `https://www.swapi.tech/api/people/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Character not found");
    }

    const data = await response.json();
    displayCharacter(data.result.properties);
  } catch (error) {
    characterInfo.innerHTML =
      "<p>Error fetching character: " + error.message + "</p>";
  } finally {
    loading.style.display = "none";
  }
}

function displayCharacter(character) {
  const characterInfo = document.getElementById("characterInfo");
  characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Home World:</strong> ${character.homeworld}</p>
    `;
}
