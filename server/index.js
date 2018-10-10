'use strict';

const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('server/data.json')
const { readFileSync } = require('fs')
const middlewares = jsonServer.defaults()
const port = 3456

router.render = (req, res) => res.jsonp(res.locals.data)

app.use(jsonServer.bodyParser)
app.use(middlewares)
app.use('/api', router)

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

const server = app.listen(port, () => console.log(`Server is running on ${port} port...`))
const exit = () => server.close(() => process.exit(0))

process.on('SIGINT', exit)
process.on('SIGTERM', exit)
process.on('exit', exit)
process.on('uncaughtException', exit)