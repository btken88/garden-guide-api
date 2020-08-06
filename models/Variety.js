const { Model } = require('objection')

class Variety extends Model {
  static get tableName() {
    return 'varieties';
  }
}

module.exports = Variety