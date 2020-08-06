const environment = process.env.NODE_ENV
const config = require('./knexfile')[environment || 'development']
const knex = require('knex')
const { Model } = require('objection')

Model.knex(knex(config))

module.exports = knex(config)