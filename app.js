const express = require('express');
const app = express();
const cors = require('cors');

const hostname = '0.0.0.0';
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {

    res.send('Hello World!')
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});