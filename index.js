require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const database = require('./database-connection')
const bodyParser = require('body-parser')
const knex = require('knex')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Plant = require('./models/Plant')
const Variety = require('./models/Variety')
const Todo = require('./models/Todo')
const User = require('./models/User')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))

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

app.post('/users', async (req, res) => {
  const { email, password, zip, first_name, last_name } = req.body
  try {
    let user = await User.query().select('*').where({ email })
    if (user.length) return res.status(400).json({ error: 'User Already Exists' })
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const userInfo = {
      email,
      password: hash,
      zip,
      first_name,
      last_name
    }
    user = await User.query().insert(userInfo).returning('*')

    const payload = { user_id: user.id }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token })
      }
    )

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})