
// Retrieve elements from the DOM
const fetchButton = document.getElementById('fetchButton');
const loadingDiv = document.getElementById('loadingDiv');
const characterInfoDiv = document.getElementById('characterInfo');

// Event listener for the fetch button
fetchButton.addEventListener('click', fetchCharacter);

// Function to fetch character data from the API
function fetchCharacter() {
  // Display loading message
  loadingDiv.style.display = 'block';

  // Send AJAX request to the API
  fetch('https://www.swapi.tech/api/people/')
    .then(response => response.json())
    .then(data => {
      const characters = data.results;
      const randomIndex = Math.floor(Math.random() * characters.length);
      const character = characters[randomIndex];

      displayCharacter(character);
    })
    .catch(error => {
      displayError();
    })
    .finally(() => {
      // Hide loading message
      loadingDiv.style.display = 'none';
    });
}

// Function to display the character information
function displayCharacter(character) {
  const { name, height, gender, birth_year, homeworld } = character;

  characterInfoDiv.innerHTML = `
    <h2>${name}</h2>
    <p>Height: ${height}</p>
    <p>Gender: ${gender}</p>
    <p>Birth Year: ${birth_year}</p>
    <p>Homeworld: ${homeworld}</p>
  `;
}

// Function to display error message
function displayError() {
  characterInfoDiv.innerHTML = '<img src="ERROR.png" alt="Error fetching data">';
}