const express = require("express");
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

const artworks = require('./data/art.json');

app.use(express.static('public'));

// Homepage
app.get('/', function(req,res){
  res.render('home', {
    art: artworks.art,
    page: 'Home'
  });
});

// Paintings page
app.get("/paintings",function(req, res){
  res.render('paintings', {
    art: artworks.art,
    page: 'Schilderijen',
    category: '*',
    artist: '*'
  });
});

// Select category filter from url
app.get("/paintings/category/:cat",function(req, res){
  res.render('paintings', {
    art: artworks.art,
    page: 'Schilderijen',
    category: req.params.cat,
    artist: '*'
  });
});

// Select artist filter from url
app.get("/paintings/artist/:artist",function(req, res){
  res.render('paintings', {
    art: artworks.art,
    page: 'Schilderijen',
    artist: req.params.artist,
    category: '*'
  });
});

// Render paintings when url still has category
app.get("/paintings/category/",function(req, res){
  res.render('paintings', {
    art: artworks.art,
    page: 'Schilderijen',
    category: '*',
    artist: '*'
  });
});

// Render paintings when url still has artist
app.get("/paintings/artist/",function(req, res){
  res.render('paintings', {
    art: artworks.art,
    page: 'Schilderijen',
    category: '*',
    artist: '*'
  });
});

// Open single painting
app.get("/painting/:name",function(req, res){
  let painting = req.params.name;
  res.render('painting', {
    painting : painting, 
    art: artworks.art,
    page: 'Schilderij'
  });
});

// Search for paintings
app.get("/search/:s",function(req, res){
  // Get results based on search value
  let results = [];
  let singleResult;
  // Get search value and convert to uppercase
  let searchValue = req.params.s.toUpperCase();
  
  // Loop through art object
  for (let i=0;i<artworks.art.length;i++) {
    singleResult = artworks.art[i];
    // Check if object name, artist or year contains search value
    if (singleResult && (singleResult.name && singleResult.name.toUpperCase().indexOf(searchValue) !== -1) || 
       (singleResult.artist && singleResult.artist.toUpperCase().indexOf(searchValue) !== -1) ||
       (singleResult.year && singleResult.year.toString().indexOf(searchValue) !== -1)) {
      // Add result to array 
      results.push(singleResult);
    }
  }
  
  res.render('search', {
    art: artworks.art,
    page: 'Schilderijen',
    s: req.params.s,
    results: results
  });
});

// Contact page
app.get("/contact",function(req, res){
  res.render('contact', {
    art: artworks.art,
    page: 'Contacteer Ons',
    category: '*',
    artist: '*'
  });
});

app.use(function(request, response){
  response.statusCode = 404;
  response.render('404', {
    page: '404'
  });
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));