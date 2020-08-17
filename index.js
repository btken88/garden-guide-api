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
const UserPlant = require('./models/UserPlant')

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

app.post('/varieties', authorizeUser, (req, res) => {
  const newPlant = req.body
  delete newPlant.userId
  Variety.query().insert(newPlant).returning('*')
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/todos', authorizeUser, (req, res) => {
  Todo.query().select('*').where('userId', req.body.userId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/todos', authorizeUser, (req, res) => {
  Todo.query().insert(req.body).returning('*')
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.patch('/todos/:id', authorizeUser, (req, res) => {
  const dateTime = new Date().toISOString()
  Todo.query()
    .where({ id: req.params.id })
    .update({ ...req.body, updated_at: dateTime })
    .returning('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.delete('/todos/:id', authorizeUser, (req, res) => {
  Todo.query().delete().where({ id: req.params.id })
    .then(() => res.status(204).json({ message: 'Deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/user_plants', authorizeUser, (req, res) => {
  UserPlant.query()
    .join('varieties', 'user_plants.varietyId', 'varieties.id')
    .where('user_plants.userId', req.body.userId)
    .select('user_plants.id as user_plant_id', 'user_plants.notes', 'varieties.*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/user_plants', authorizeUser, (req, res) => {
  UserPlant.query().insert(req.body).returning('*')
    .then(data => {
      return UserPlant.query()
        .join('varieties', 'user_plants.varietyId', 'varieties.id')
        .where('user_plants.id', data.id)
        .select('user_plants.id as user_plant_id', 'user_plants.notes', 'varieties.*')
    })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.delete('/user_plants/:id', authorizeUser, (req, res) => {
  UserPlant.query().delete().where({ id: req.params.id })
    .then(() => res.status(204).json({ message: 'Deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.patch('/user_plants/:id', authorizeUser, (req, res) => {
  const dateTime = new Date().toISOString()
  UserPlant.query()
    .where({ id: req.params.id })
    .update({ notes: req.body.notes, updated_at: dateTime })
    .returning('*')
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    let query = await User.query().select('*').where({ email })
    if (!query) res.status(400).json({ error: 'Incorrect username or password' })

    const user = query[0]
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) res.status(400).json({ error: 'Incorrect username or password' })

    const payload = { user_id: user.id }
    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err
      res.status(200).json({ token })
    })
  } catch (err) {
    console.log(err)
    res.setHeader("status", 500)
    res.json(err.message)
  }
})

app.post('/signup', async (req, res) => {
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

function authorizeUser(req, res, next) {
  const token = req.headers.authorization
  if (!token) return res.json({ error: 'Authentication failed' }).status(401)
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.json({ error: err.message }).status(500)
    } else {
      req.body.userId = payload.user_id
      next()
    }
  })
}