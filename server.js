'use strict'

const express = require('express');
const PORT = 8000;
const HOST = '0.0.0.0';
const app = express();
app.get('/',(req,res) => {
    res.send('Hello World - 1.0.0.0');
});
app.listen(PORT,HOST,() => {
    console.log(`Running On http://${HOST}:${PORT}`);
});

