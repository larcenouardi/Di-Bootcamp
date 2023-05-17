 // Array of quotes
 const quotes = [
    { id: 0, author: "Prophète Mohammed (peace be upon him)", quote: '"Be kind, for whenever kindness becomes part of something, it beautifies it. Whenever it is taken from something, it leaves it tarnished"', likes: 0 },
{ id: 1, author: "Pablo Escobar", quote: '"There can only be one king."', likes: 0 },
{ id: 2, author: "Bob Marley", quote: '"Until the color of a man’s skin is of no more significance than the color of his eyes, me say war. There can only be one king."', likes: 0 },
{ id: 3, author: "Steve Jobs", quote: '"You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future."', likes: 0 },
{ id: 4, author: "Genghis Khan", quote: '"The greatest happiness is to scatter your enemy and drive him before you. To see his cities reduced to ashes. To see those who love him shrouded and in tears. And to gather to your bosom his wives and daughters."', likes: 0 },
{ id: 5, author: "Mohamed Ali Clay", quote: '"We need to be weapons of mass construction, weapons of mass love. It is not enough just to change the system. We need to change ourselves."', likes: 0 }
];

// Retrieve DOM elements
const quoteSection = document.getElementById("quote-section");
const generateBtn = document.getElementById("generate-btn");
const addQuoteForm = document.getElementById("add-quote-form");
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const charCountBtn = document.getElementById("char-count-btn");
const charCountNoSpaceBtn = document.getElementById("char-count-nospace-btn");
const wordCountBtn = document.getElementById("word-count-btn");
const likeBtn = document.getElementById("like-btn");
const filterForm = document.getElementById("filter-form");
const authorFilterInput = document.getElementById("author-filter-input");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuoteIndex = null;
let filteredQuotes = [];

// Function to display a quote in the DOM
function displayQuote(quote) {
quoteSection.innerHTML = `
  <p>Author: ${quote.author}</p>
  <p>Quote: ${quote.quote}</p>
  <p>Likes: ${quote.likes}</p>
`;
}

// Function to generate a random quote
function generateRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];

// Avoid displaying the same quote twice in a row
if (randomIndex === currentQuoteIndex) {
  generateRandomQuote();
  return;
}

currentQuoteIndex = randomIndex;
displayQuote(quote);
}

// Function to add a new quote
function addQuote(event) {
event.preventDefault();

const newQuote = {
  id: quotes.length,
  author: authorInput.value,
  quote: quoteInput.value,
  likes: 0
};

quotes.push(newQuote);
quoteInput.value = "";
authorInput.value = "";
}

// Function to count characters in a quote (including spaces)

function countCharacters() {
const quote = quotes[currentQuoteIndex].quote;
const characterCount = quote.length;
console.log("Character Count (with spaces):", characterCount);
}

// Function to count characters in a quote (excluding spaces)

function countCharactersNoSpace() {
const quote = quotes[currentQuoteIndex].quote;
const characterCount = quote.replace(/\s/g, "").length;
console.log("Character Count (without spaces):", characterCount);
}

// Function to count words in a quote
function countWords() {
const quote = quotes[currentQuoteIndex].quote;
const words = quote.split(" ");
const wordCount = words.length;
console.log("Word Count:", wordCount);
}

// Function to increment the likes of a quote
function likeQuote() {
quotes[currentQuoteIndex].likes++;
displayQuote(quotes[currentQuoteIndex]);
}

// Function to filter quotes by author
function filterQuotes(event) {
event.preventDefault();
const authorFilter = authorFilterInput.value.trim().toLowerCase();
filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter);

if (filteredQuotes.length > 0) {
  currentQuoteIndex = 0;
  displayQuote(filteredQuotes[currentQuoteIndex]);
} else {
  quoteSection.innerHTML = "<p>No quotes found for the specified author.</p>";
}
}

// Function to display the previous quote in filtered quotes
function showPreviousQuote() {
currentQuoteIndex--;
if (currentQuoteIndex < 0) {
  currentQuoteIndex = filteredQuotes.length - 1;
}
displayQuote(filteredQuotes[currentQuoteIndex]);
}

// Function to display the next quote in filtered quotes
function showNextQuote() {
currentQuoteIndex++;
if (currentQuoteIndex === filteredQuotes.length) {
  currentQuoteIndex = 0;
}
displayQuote(filteredQuotes[currentQuoteIndex]);
}

// Attach event listeners
generateBtn.addEventListener("click", generateRandomQuote);
addQuoteForm.addEventListener("submit", addQuote);
charCountBtn.addEventListener("click", countCharacters);
charCountNoSpaceBtn.addEventListener("click", countCharactersNoSpace);
wordCountBtn.addEventListener("click", countWords);
likeBtn.addEventListener("click", likeQuote);
filterForm.addEventListener("submit", filterQuotes);
prevBtn.addEventListener("click", showPreviousQuote);
nextBtn.addEventListener("click", showNextQuote);

