const { Model } = require('objection')

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
}

module.exports = Variety