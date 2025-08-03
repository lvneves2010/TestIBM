require('dotenv').config();

const connection = require('./dataBase/connection');
const { IamAuthenticator } = require('ibm-watson/auth');
const AssistantV2 = require('ibm-watson/assistant/v2');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = process.env.PORT || 3001;

// 🔹 Substitua pela sua chave de API Watsonx
const assistant = new AssistantV2({
  version: '2021-11-27',
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_APIKEY || 'Io2GY4N23GnDjTclqBw1IEqoJ2mGgaAf8QmxSVpHfn_h',
  }),
  serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com',
});

// 🔹 ID do novo Assistant (Watsonx)
const assistantId = '7fb5aac9-1062-4d2d-8bd6-e51661c30cb1';

// Configurações de CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST");
  next();
});

// 🔹 Endpoint de conversa
app.post('/conversation/', async (req, res) => {
  const { text, session_id } = req.body;

  try {
    // 1️⃣ Criar sessão caso não exista
    let sessionId = session_id;
    if (!sessionId) {
      const session = await assistant.createSession({
        assistantId,
      });
      sessionId = session.result.session_id;
    }

    // 2️⃣ Enviar mensagem para o Watsonx Assistant
    const response = await assistant.message({
      assistantId,
      sessionId,
      input: {
        message_type: 'text',
        text,
      },
    });

    // 3️⃣ Capturar variáveis retornadas (se existirem)
    let nome = '';
    let descricao = '';

    // Watsonx retorna variáveis dentro de "context" ou "skills"
    try {
      const variables = response.result.output?.entities || [];
      if (variables.length > 0) {
        const nomeVar = variables.find(v => v.entity === 'nome_usuario');
        const descVar = variables.find(v => v.entity === 'descricao');
        nome = nomeVar ? nomeVar.value : '';
        descricao = descVar ? descVar.value : '';
      }
    } catch (e) {
      console.log("Não foi possível extrair variáveis do retorno.");
    }

    // 4️⃣ Salvar no banco caso tenha valores válidos
    if (nome && descricao) {
      await connection.CreateChamado({
        nome: nome,
        descricao: descricao,
        situacao: 'Em Aberto',
        atendente: 'Watson',
      });
    }

    // 5️⃣ Retornar resposta para o frontend
    res.json({
      output: response.result.output,
      session_id: sessionId,
    });

  } catch (err) {
    console.error("Erro na API Watson:", err);
    res.status(500).json({ error: 'Erro ao se comunicar com Watson Assistant', details: err });
  }
});

// Inicializar servidor
app.listen(port, () => console.log(`API Watson rodando na porta ${port}`));
