const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send("index.html")
})

app.listen(process.env.PORT)