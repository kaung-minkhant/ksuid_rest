const express = require('express')
const ksuid = require('ksuid')

const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`KSUID Server Listening on Port ${PORT}`);
})