'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const {STRING, VIRTUAL, ENUM, INTEGER, BOOLEAN, DOUBLE} = require('sequelize')

module.exports = db => db.define('victim', {
  vehicle: {
    type: ENUM('air', 'water', 'land'),
    allowNull: false
  },
  capacity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  emergency: {
    type: BOOLEAN,
    defaultValue: false
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
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})

module.exports.associations = (Victim, {User, Rescuer}) => {
  Victim.belongsTo(User)
  Victim.belongsTo(Rescuer)
}
