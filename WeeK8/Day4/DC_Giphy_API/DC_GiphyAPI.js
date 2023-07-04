// Set up the API query parameters
const baseUrl = "https://api.giphy.com/v1/gifs/random";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Get references to the HTML elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const gifContainer = document.getElementById("gifContainer");
const deleteAllButton = document.getElementById("deleteAllButton");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
  const query = searchInput.value.trim();

  // Construct the API query URL
  const apiUrl = `${baseUrl}?api_key=${apiKey}&tag=${query}`;

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set up a callback function to handle the API response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Parse the JSON response into a JavaScript object
      const response = JSON.parse(xhr.responseText);

      // Extract the URL of the gif from the response object
      const gifUrl = response.data.images.original.url;

      // Create a new div element to hold the gif and the delete button
      const gifDiv = document.createElement("div");
      gifDiv.classList.add("gif");

      // Create a new img element to display the gif
      const gifImg = document.createElement("img");
      gifImg.src = gifUrl;
      gifDiv.appendChild(gifImg);

      // Create a new button element to delete the gif
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function() {
        gifDiv.remove();
      });
      gifDiv.appendChild(deleteButton);

      // Append the gif div to the container element
      gifContainer.appendChild(gifDiv);
    }
  };

  // Send the API request
  xhr.open('GET', apiUrl);
  xhr.send();
});

// Add an event listener to the delete all button
deleteAllButton.addEventListener("click", function() {
  // Remove all the gif divs from the container element
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});