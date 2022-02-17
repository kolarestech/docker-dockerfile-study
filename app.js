const express = require('express')
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.listen(port, () => {
    console.log(`executando na porta: ${port}`);
});