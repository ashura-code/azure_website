const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
      <center>
      <h1>Vanakkam To Azure</h1>
      </center>
      `);
});

app.listen(process.env.PORT || 80);
