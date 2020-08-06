const express = require('express')
const cors = require('cors')
const app = express()
const database = require('./database-connection')
const bodyParser = require('body-parser')
const Plant = require('./models/Plant')

app.use(cors())
app.use(bodyParser.json())

app.post('/plants', async (req, res) => {
  const newPlant = await Plant.query().insert(req.body)
  res.status(201).json(newPlant)
})

app.listen(5000)