require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'about.html'))
);
app.get('/contact-me', (req, res) =>
  res.sendFile(path.join(__dirname, 'contact-me.html'))
);
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '404.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT);
