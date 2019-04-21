
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const Watson = require('watson-developer-cloud/assistant/v1');

app.get('/mensagem', (req, res) =>
 {

 res.setHeader('Access-Control-Allow-Origin', '*');
//  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
const chat = new Watson({
  version: '2019-02-28',
  iam_apikey: 'Io2GY4N23GnDjTclqBw1IEqoJ2mGgaAf8QmxSVpHfn_h',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

  chat.message({
    workspace_id: '96304b5c-6894-46ae-916c-9e8a166e1757',
    input: {'text': req.query.texto}
    })
    .then(resultado => {
      res.send({'resposta': resultado.output.text[0]});
    })
    .catch(err => {
        res.send(err);
      console.log(err)
  });
})