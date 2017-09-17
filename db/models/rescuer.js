'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const {STRING, VIRTUAL, ENUM, INTEGER, BOOLEAN, DOUBLE} = require('sequelize')

module.exports = db => db.define('rescuer', {
  vehicle: {
    type: ENUM('land', 'water', 'air'),
    allowNull: false
  },
  capacity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  active: {
    type: BOOLEAN,
    defaultValue: false
  },
  latitude: {
    type: DOUBLE,
    allowNull: true
  },
  longitude: {
    type: DOUBLE,
    allowNull: true
  },
  medicalExperience: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true
    }
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})

module.exports.associations = (Rescuer, {User, Victim}) => {
  Rescuer.belongsTo(User)
  Rescuer.hasMany(Victim)
}
