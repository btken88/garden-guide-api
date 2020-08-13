const { Model } = require('objection')
const Variety = require('./Variety')
const User = require('./User')

class Plant extends Model {
  static get tableName() {
    return 'plants'
  }

  static get relationMappings() {
    return {
      varieties: {
        relation: Model.HasManyRelation,
        modelClass: Variety,
        join: {
          from: 'plants.id',
          to: 'variety.plantId'
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'plants.id',
          through: {
            from: 'user_plants.plantId',
            to: 'user_plants.userId'
          },
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Plant