const express = require('express')
const { readFileSync } = require('fs')
const app = express()
const port = 3456

const sendOrFail = (res, text) => {
    if (Math.random() < 0.15) {
        res.status(500).send('ERROR!!!')
    } else {
        res.send(text)
    }
}

app.get('/', (req ,res) => res.send('Check https://github.com/szikszail/costip-api'))
app.get('/load', (req, res) => sendOrFail(res, 'Hello World!'))
app.get('/huge', (req, res) => sendOrFail(res, readFileSync('./lipsum.txt', 'utf8').repeat(100)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))