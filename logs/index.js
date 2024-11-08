const express = require('express');
const app = express();
const { saveLog, getLogs } = require('./database');
const port = 3006;

app.use(express.json());

app.post('/event', async (req, res) => {
    const { tipo_evento } = req.body;
    if (!tipo_evento) {
        return res.status(400).send('Evento inválido');
    }
    await saveLog(tipo_evento);
    res.status(201).send('Log registrado');
});

app.get('/logs', async (req, res) => {
    const logs = await getLogs();
    res.json(logs);
});

app.listen(port, () => {
    console.log(`Log service running on port ${port}`);
});
