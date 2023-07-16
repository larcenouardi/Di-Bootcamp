//  Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));



async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error(error);
  }
}

getStarship();