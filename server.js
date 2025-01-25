const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./db')
app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
