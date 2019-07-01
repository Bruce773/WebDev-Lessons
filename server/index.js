const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// const port = process.env.PORT || 4000
const port = 4000;

app.use(cors());

app.use(express.static(__dirname + '/../dist'));

app.use('/:pages', express.static(__dirname + '/../dist'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
