const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server running on port ${process.env.PORT ? process.env.PORT : 4000}`
  );
});
