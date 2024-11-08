const { Pool } = require('pg');
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'logsdb',
    password: 'password',
    port: 5432,
});

async function saveLog(tipo_evento) {
    const query = `INSERT INTO logs (tipo_evento, data_hora) VALUES ($1, NOW())`;
    await pool.query(query, [tipo_evento]);
}

async function getLogs() {
    const result = await pool.query(`SELECT * FROM logs ORDER BY id`);
    return result.rows;
}

module.exports = { saveLog, getLogs };
