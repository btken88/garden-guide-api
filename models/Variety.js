const { Model } = require('objection')
const User = require('./User')

class Variety extends Model {
  static get tableName() {
    return 'varieties';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        plantId: { type: 'integer' },
        scientificName: { type: 'string', minLength: 1 },
        commonName: { type: 'string', minLength: 1 },
        description: { type: ['string', 'null'] },
        seedSpacing: { type: 'integer' },
        maturity: { type: 'integer' },
        indoor: { type: 'integer' },
        outdoor: { type: 'integer' },
        habit: { type: 'string' }
      }
    }
  }

  static relationMappings = {
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

module.exports = Variety