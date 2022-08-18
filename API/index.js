const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/TESTE', (req, res) => {
    res.send('Estou testando url')
})

app.listen(port, () => {
    console.log('SUBIU')
})