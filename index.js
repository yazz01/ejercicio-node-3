const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  //res.send('Hola Mundo!');
  res.sendFile(path.join(__dirname + '/html/index.html'));;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});