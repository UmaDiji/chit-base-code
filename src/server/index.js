const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(
  cors({
    origin: '*'
  })
);

app.use(express.static('dist'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/ping', (req, res) => res.send('pong!!!'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

app.listen(process.env.PORT || 3001, () =>
  console.log(`Serer listening on port ${process.env.PORT || 3001}!`)
);
