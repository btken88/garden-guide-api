const { Model } = require('objection')
const Variety = require('./Variety')
const User = require('./User')

class UserPlant extends Model {
  static get tableName() {
    return 'user_plants'
  }

  static relationMappings = {
    variety: {
      relation: Model.BelongsToOneRelation,
      modelClass: Variety,
      join: {
        from: 'user_plants.varietyId',
        to: 'varieties.id'
      }
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'user_plants.userId',
        to: 'users.id'
      }
    }
  }
}

module.exports = UserPlant