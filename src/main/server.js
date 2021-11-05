const express = require('express');
const { dockStart } = require('@nlpjs/basic');

let nlp = null;

export async function server() {
  const _app = express();
  const port = 3000;

  const dock = await dockStart({ use: ['Basic'] });

  nlp = dock.get('nlp');
  nlp.addLanguage('en');
  // Adds the utterances and intents for the NLP
  nlp.addDocument('en', 'Hello Apollo', 'greetings.hello');
  nlp.addAnswer('en', 'greetings.hello', "*Gasp* I'm alive!");
  await nlp.train();

  _app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  _app.get('/talk', async (req, res) => {
    let msg = decodeURI(req.query.msg); //precisamos decodificar o URL para string, exemplo %20 vira ' '
    console.log(msg);
    const response = await nlp.process('en', msg);
    res.send(response.answers[0].answer);
  });

  _app.listen(port, () => {
    console.log(`Apollo running at http://localhost:${port}`);
  });
}
