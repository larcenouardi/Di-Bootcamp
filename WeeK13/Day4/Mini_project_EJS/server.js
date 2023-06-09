const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Route '/'
app.get('/', async (req, res) => {
  try {
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('pages/index', { feed: feed.items });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred');
  }
});

// Route '/search'
app.get('/search', (req, res) => {
  res.render('pages/search', { title: '', category: '' });
});

app.post('/search', (req, res) => {
  const { title, category } = req.body;
  // Traitement de la recherche en fonction du titre et de la catégorie

  // Renvoyer les résultats de recherche à la vue correspondante
  res.render('pages/search', { title, category });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
