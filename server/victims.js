'use strict'

const db = require('APP/db')
const Victim = db.model('victim')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Victim.findAll()
        .then(victims => res.json(victims))
        .catch(next))
  .post('/',
    (req, res, next) => {
      Victim.create(req.body)
      .then(victim => res.status(201).json(victim))
      .catch(next) })
  .get('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
      Victim.findById(req.params.id)
      .then(victim => res.json(victim))
      .catch(next))
