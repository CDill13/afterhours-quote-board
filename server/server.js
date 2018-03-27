require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  cors = require('cors'),
  port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    app.listen(port, () => {
      console.log(`${port} ducks prepared to launch.`);
    });
  })
  .catch(err => {
    console.log(err);
  });

app.get('/api/quotes', (req, res) => {
  console.log('made it');
  res.sendStatus(200);
});
