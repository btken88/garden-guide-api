const { Model } = require('objection')
const Todo = require('./Todo')
const Plant = require('./Plant')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      todos: {
        relation: Model.HasManyRelation,
        modelClass: Todo,
        join: {
          from: 'users.id',
          to: 'todos.userId'
        }
      },
      plants: {
        relation: Model.ManyToManyRelation,
        modelClass: Plant,
        join: {
          from: 'users.id',
          through: {
            from: 'user_plants.userId',
            to: 'user_plants.plantId'
          },
          to: 'plants.id'
        }
      }
    }
  }
}

module.exports = User