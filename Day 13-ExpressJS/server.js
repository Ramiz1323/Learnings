const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, Home page!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});