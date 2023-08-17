const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');
const path = require('path');

const app = express();
const parser = new Parser();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/pages'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// GET request to fetch all posts
app.get('/', async (req, res) => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  res.render('index', { feed: feed.items });
});

// GET request to render the search page
app.get('/search', (req, res) => {
  res.render('search', { feed: [] });
});

// POST request to search by title
app.post('/search/title', async (req, res) => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  let title = req.body.title;
  let matchingPosts = feed.items.filter(post => post.title.includes(title));
  res.render('search', { feed: matchingPosts });
});

// POST request to search by category
app.post('/search/category', async (req, res) => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  let category = req.body.category;
  let matchingPosts = feed.items.filter(post => post.categories.includes(category));
  res.render('search', { feed: matchingPosts });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
