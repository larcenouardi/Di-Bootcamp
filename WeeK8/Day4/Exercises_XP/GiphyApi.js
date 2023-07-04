// Set up the API query parameters
const baseUrl = "https://api.giphy.com/v1/gifs/search";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query = "sun";
const offset = 2;
const limit = 10;
const rating = "g";

// Construct the API query URL
const apiUrl = `${baseUrl}?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}`;

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set up a callback function to handle the API response
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // Parse the JSON response into a JavaScript object
    const response = JSON.parse(xhr.responseText);
    
    // Log the JavaScript object to the console
    console.log(response);
  }
};

// Send the API request
xhr.open('GET', apiUrl);
xhr.send();