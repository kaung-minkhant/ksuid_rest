const express = require('express')
const ksuid = require('ksuid')

const app = express()
const PORT = 3000;



app.get('/', (req, res) => {
    res.send("Welcome to REST API for KSUID")
})

app.get('/once', (req, res) => {
    const code = ksuid.randomSync()
    const code_string = code.string
    res.send(code_string)
})

app.listen(PORT, () => {
    console.log(`KSUID Server Listening on Port ${PORT}`);
})