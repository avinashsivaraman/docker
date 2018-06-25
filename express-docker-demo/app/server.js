const express = require('express');

const app = express();
const HOST = '0.0.0.0';
const PORT = 9443;

app.get('/', (res, req) => {
    req.json({ name: 'Avinash', lastName: 'Sivaraman' });
})

app.listen(PORT, HOST);
console.log(`Running on HOST: ${HOST} \t PORT: ${PORT}`);

