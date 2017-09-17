'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const {STRING, VIRTUAL, ENUM, INTEGER, BOOLEAN, DOUBLE} = require('sequelize')

module.exports = db => db.define('victim', {
  vehicle: {
    type: ENUM('boat', 'car'),
    allowNull: false
  },
  capacity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rescued: {
    type: ENUM('yes', 'no', 'in progress'),
    defaultValue: 'no'
  },
  latitude: {
    type: DOUBLE,
    allowNull: true
  },
  longitude: {
    type: DOUBLE,
    allowNull: true
  }
})

module.exports.associations = (Victim, {User, Rescuer}) => {
  Victim.belongsTo(User)
  Victim.belongsTo(Rescuer)
}
