require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')

const routes = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))

app.get('/plants', routes.getAllPlants)
app.get('/plants/:id', routes.getPlantById)
app.get('/varieties/:id', routes.getVarietyById)
app.get('/varieties/plantId/:id', routes.getVarietiesByPlantId)
app.post('/varieties', routes.authorizeUser, routes.postVariety)
app.get('/todos', routes.authorizeUser, routes.getUserTodos)
app.post('/todos', routes.authorizeUser, routes.postTodo)
app.patch('/todos/:id', routes.authorizeUser, routes.updateTodo)
app.delete('/todos/:id', routes.authorizeUser, routes.deleteTodo)
app.get('/user_plants', routes.authorizeUser, routes.getUserPlants)
app.post('/user_plants', routes.authorizeUser, routes.postUserPlant)
app.delete('/user_plants/:id', routes.authorizeUser, routes.deleteUserPlant)
app.patch('/user_plants/:id', routes.authorizeUser, routes.updateUserPlant)
app.post('/login', routes.login)
app.post('/signup', routes.signup)
app.post('/weather', authorizeUser, routes.getWeather)

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})

