'use strict'

const db = require('APP/db')
const Rescuer = db.model('rescuers')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Rescuer.findAll()
        .then(rescuers => res.json(rescuers))
        .catch(next))
  .post('/',
    (req, res, next) =>
      Rescuer.create(req.body)
      .then(rescuer => res.status(201).json(rescuer))
      .catch(next))
  .get('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
      Rescuer.findById(req.params.id)
      .then(rescuer => res.json(rescuer))
      .catch(next))
