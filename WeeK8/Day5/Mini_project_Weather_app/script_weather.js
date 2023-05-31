
    document.addEventListener("DOMContentLoaded", function() {
      const weatherForm = document.getElementById("weatherForm");
      const weatherCardContainer = document.getElementById("weatherCardContainer");
      const unitToggle = document.getElementById("unitToggle");
      let isMetricUnit = true;





      function getWeatherByCoordinates(latitude, longitude) {
        const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // MAJ des informations météo sur la page
            updateWeatherData(data);
          })
          .catch(error => {
            console.log("Une erreur s'est produite lors de la récupération des données météo :", error);
          });
      }
      
      function updateWeatherData(data) {
        const locationElement = document.getElementById("location");
        const weatherDescriptionElement = document.getElementById("weather-description");
        const weatherIconElement = document.getElementById("weather-icon");
        const temperatureElement = document.getElementById("temperature");
        const humidityElement = document.getElementById("humidity");
      
        // MAJ des éléments HTML avec les données météo
        locationElement.textContent = `Lieu : ${data.name}, ${data.sys.country}`;
        weatherDescriptionElement.textContent = `Météo : ${data.weather[0].description}`;
        weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperatureElement.innerHTML = `Température : <span class="temperature" data-temperature="${data.main.temp}" >${data.main.temp} Kelvin</span>`;
     //    temp.innerHTML = `Température : <span class="temperature" >${temperature} Kelvin</span>`;
 
        humidityElement.textContent = `Humidité : ${data.main.humidity}%`;
      }
 
      window.addEventListener("load", function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherByCoordinates(latitude, longitude);
          }, function(error) {
            console.log("Une erreur s'est produite lors de la récupération de la localisation :", error);
          });
        } else {
          console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
        }
      });
      
      setInterval(function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherByCoordinates(latitude, longitude);
          }, function(error) {
            console.log("Une erreur s'est produite lors de la récupération de la localisation :", error);
          });
        }
      }, 600000); // 10 minutes en millisecondes
      
 
 










      weatherForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const cityInput = document.getElementById("cityInput");
        const city = cityInput.value;

        fetchWeatherData(city);

        weatherForm.reset();
      });

      unitToggle.addEventListener("click", function() {
        isMetricUnit = !isMetricUnit;

        const temperatureElements = document.querySelectorAll(".temperature");
        temperatureElements.forEach(function(element) {
          const currentTemperature = parseFloat(element.dataset.temperature);

          if (isMetricUnit) {
            const temperatureCelsius = convertKelvinToCelsius(currentTemperature);
            element.textContent = `${temperatureCelsius.toFixed(2)} °C`;
          } else {
            const temperatureFahrenheit = convertKelvinToFahrenheit(currentTemperature);
            element.textContent = `${temperatureFahrenheit.toFixed(2)} °F`;
          }
        });
      });

      function fetchWeatherData(city) {
        const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.cod === "404") {
              showError("City not found.");
              return;
            }

            const weatherData = {
              city: data.name,
              country: data.sys.country,
              weather: data.weather[0].main,
              icon: data.weather[0].icon,
              temperature: data.main.temp,
              humidity: data.main.humidity,
              wind: data.wind.speed,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset
            };

            displayWeatherData(weatherData);
          })
          .catch(error => {
            console.log("Error:", error);
            showError("An error occurred. Please try again.");
          });
      }

      function displayWeatherData(weatherData) {
        const weatherCard = document.createElement("div");
        weatherCard.classList.add("weather-card");

        const cityName = document.createElement("h2");
        cityName.textContent = `${weatherData.city}, ${weatherData.country}`;

        const weather = document.createElement("p");
        weather.textContent = `Weather: ${weatherData.weather}`;

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
        weatherIcon.alt = weatherData.weather;

        const temperature = document.createElement("p");
        temperature.classList.add("temperature");
        temperature.dataset.temperature = weatherData.temperature;
        temperature.textContent = `${convertKelvinToCelsius(weatherData.temperature).toFixed(2)} °C`;

        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;

        const wind = document.createElement("p");
        wind.textContent = `Wind: ${weatherData.wind} m/s`;

        const sunrise = document.createElement("p");
        sunrise.textContent = `Sunrise: ${getTimeString(weatherData.sunrise)}`;

        const sunset = document.createElement("p");
        sunset.textContent = `Sunset: ${getTimeString(weatherData.sunset)}`;

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("delete-button");
        closeBtn.textContent = "X";
        closeBtn.addEventListener("click", function() {
          weatherCard.remove();
        });

        weatherCard.appendChild(cityName);
        weatherCard.appendChild(weather);
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(temperature);
        weatherCard.appendChild(humidity);
        weatherCard.appendChild(wind);
        weatherCard.appendChild(sunrise);
        weatherCard.appendChild(sunset);
        weatherCard.appendChild(closeBtn);

        weatherCardContainer.appendChild(weatherCard);
      }

      function convertKelvinToCelsius(temperature) {
        return temperature - 273.15;
      }

      function convertKelvinToFahrenheit(temperature) {
        return (temperature - 273.15) * 9/5 + 32;
      }

      function getTimeString(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
      }

      function showError(message) {
        alert(message);
      }









      
    });


