const express = require('express')
const cors = require('cors')
const app = express()
const database = require('./database-connection')
const bodyParser = require('body-parser')
const knex = require('knex')
const Plant = require('./models/Plant')
const Variety = require('./models/Variety')
const Todo = require('./models/Todo')

const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/plants', (req, res) => {
  Plant.query().select('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/plants/:id', (req, res) => {
  Plant.query().select('*').where({ id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/varieties/:id', (req, res) => {
  Variety.query().select('*').where({ id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/varieties/plantId/:id', (req, res) => {
  Variety.query().select('*').where({ plantId: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/todos', (req, res) => {
  Todo.query().select('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/todos', (req, res) => {
  Todo.query().insert(req.body).returning('*')
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.patch('/todos/:id', (req, res) => {
  const dateTime = new Date().toISOString()
  Todo.query()
    .where({ id: req.params.id })
    .update({ ...req.body, updated_at: dateTime })
    .returning('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${process.env.PORT || PORT}`)
})