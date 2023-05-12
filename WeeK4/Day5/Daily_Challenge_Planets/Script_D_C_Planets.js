const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const colors = ['#C4C4C4', '#F8C941', '#61C9A8', '#FFA644', '#E6463B', '#F4A6A6', '#9EC9E6', '#A46AF4'];

const listPlanets = document.querySelector('.listPlanets');

for (let i = 0; i < planets.length; i++) {
  const planetDiv = document.createElement('div');
  planetDiv.className = 'planet';
  planetDiv.style.backgroundColor = colors[i];

// create sub-array of moons for each planet
  const moonCount = i + 1;
  const moons = Array.from({length: moonCount}, (v, i) => 'Moon'+(i+1));
  
  for (let i = 0; i < moons.length; i++) {
    const moonDiv = document.createElement('div');
    moonDiv.className = 'moon';
    moonDiv.style.top = 30 * (i + 1) + 'px';
    moonDiv.style.left = 30 * (i + 1) + 'px';
    planetDiv.appendChild(moonDiv);
  }
  
  listPlanets.appendChild(planetDiv);
}
