document.getElementById('cityForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const parisLatitude = document.getElementById('parisLatitude').value;
    const parisLongitude = document.getElementById('parisLongitude').value;
    const nyLatitude = document.getElementById('nyLatitude').value;
    const nyLongitude = document.getElementById('nyLongitude').value;
  
    const parisSunrisePromise = fetch(`https://api.sunrise-sunset.org/json?lat=${parisLatitude}&lng=${parisLongitude}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);
  
    const nySunrisePromise = fetch(`https://api.sunrise-sunset.org/json?lat=${nyLatitude}&lng=${nyLongitude}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);
  
    try {
      const [parisSunrise, nySunrise] = await Promise.all([parisSunrisePromise, nySunrisePromise]);
      document.getElementById('result').textContent = `Paris Sunrise: ${parisSunrise}, New York Sunrise: ${nySunrise}`;
    } catch (error) {
      console.log(error);
    }
  });
  