const { Model } = require('objection')
const Variety = require('./Variety')

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
      }
    }
  }
}

module.exports = Plant