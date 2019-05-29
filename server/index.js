const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../index.html'));

app.get('/', (req, res) => {
  res.send(express.static(__dirname + '/../index.html'));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server running on port ${process.env.PORT ? process.env.PORT : 4000}`
  );
});
