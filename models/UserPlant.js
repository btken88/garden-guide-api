const { Model } = require('objection')

class UserPlant extends Model {
  static get tableName() {
    return 'user_plants'
  }
}

module.exports = UserPlant