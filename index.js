const express = require('express')
const cors = require('cors')
const app = express()
const database = require('./database-connection')
const bodyParser = require('body-parser')
const Plant = require('./models/Plant')

app.use(cors())
app.use(bodyParser.json())

app.get('/plants', (req, res) => {
  Plant.query().select('*')
    .then(data => res.json(data))
})

app.get('/plants/:id', (req, res) => {
  Plant.query().select('*').where({ id: req.params.id })
    .then(data => res.json(data))
})

app.listen(5000)