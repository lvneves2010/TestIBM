require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3001;

const assistant = new AssistantV1({
  version: '2019-02-28',
  iam_apikey: 'Io2GY4N23GnDjTclqBw1IEqoJ2mGgaAf8QmxSVpHfn_h',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: '96304b5c-6894-46ae-916c-9e8a166e1757',
    context,
  };

  assistant.message(params, (err, response) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
