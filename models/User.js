const { Model } = require('objection')
const Todo = require('./Todo')
const Variety = require('./Variety')

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
      varieties: {
        relation: Model.ManyToManyRelation,
        modelClass: Variety,
        join: {
          from: 'users.id',
          through: {
            from: 'user_plants.userId',
            to: 'user_plants.varietyId'
          },
          to: 'varieties.id'
        }
      }
    }
  }
}

module.exports = User