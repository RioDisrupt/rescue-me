'use strict'

const db = require('APP/db')
const Victim = db.model('victims')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
    forbidden('listing users is not allowed'),
    (req, res, next) =>
      Victim.findAll()
        .then(victims => res.json(victims))
        .catch(next))
  .post('/',
    (req, res, next) =>
      Victim.create(req.body)
      .then(victim => res.status(201).json(victim))
      .catch(next))
  .get('/:id',
    mustBeLoggedIn,
    (req, res, next) =>
      Victim.findById(req.params.id)
      .then(victim => res.json(victim))
      .catch(next))
