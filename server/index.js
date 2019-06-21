const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('<h1>✅</h1>'));
    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, () => {
      console.log(`Oliwi express ☕️: app listening in port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
