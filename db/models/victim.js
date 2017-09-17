'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const {STRING, VIRTUAL, ENUM, INTEGER, BOOLEAN, DOUBLE} = require('sequelize')

module.exports = db => db.define('rescuer', {
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
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

// module.exports.associations = (User, {OAuth, Thing, Favorite}) => {
//   User.hasOne(OAuth)
//   User.belongsToMany(Thing, {as: 'favorites', through: Favorite})
// }
