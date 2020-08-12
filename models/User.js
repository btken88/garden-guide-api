const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Todo = require('./Todo')

    return {
      todos: Model.HasManyRelation,
      modelClass: Todo,
      join: {
        from: 'users.id',
        to: 'todos.userId'
      }
    }
  }
}

module.exports = User