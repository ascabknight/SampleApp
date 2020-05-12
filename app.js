const express = require('express')
const app = express()
const HOST = '0.0.0.0'
const PORT = 3000

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.listen(PORT, HOST)
console.log(`Example app listening at http://${HOST}:${PORT}`)