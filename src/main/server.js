const express = require('express');

export function server() {
  const _app = express();
  const port = 3000;

  _app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  _app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
