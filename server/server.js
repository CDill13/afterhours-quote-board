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

app.get('/api/quotes', async (req, res) => {
  const db = req.app.get('db');
  const quotes = await db.selectAllQuotes();
  res.status(200).send(quotes);
});

app.post('/api/quote', (req, res) => {
  console.log(req.body);
  const db = req.app.get('db');
  db.getUser([req.body.name]).then(existingUser => {
    if (!existingUser[0]) {
      db.createUser([req.body.name]).then(createdUser => {
        db.createQuote([createdUser[0].id, req.body.quote]).then(quote => {
          console.log(quote);
          res.status(200).send(quote);
        });
      });
    } else {
      db.createQuote([existingUser[0].id, req.body.quote]).then(quote => {
        console.log(quote);
        res.status(200).send(quote);
      });
    }
  });
});
