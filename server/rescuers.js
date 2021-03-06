'use strict'

const db = require('APP/db')
const Rescuer = db.model('rescuer')
const Victim = db.model('victim')
const User = db.model('users')

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'cdc37eb9',
  apiSecret: 'e88992c6217a4519'
});

const axios = require('axios')

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
    (req, res, next) =>
      Rescuer.findById(req.params.id)
      .then(rescuer => res.json(rescuer))
      .catch(next))
  .put('/:id',
    (req, res, next) =>
      Rescuer.update(req.body, {where: {id: req.params.id}})
      .then(rescuer => res.json(rescuer[1]))
      .catch(next))
  .get('/match/:victimId',
    (req, res, next) =>
        Victim.findById(req.params.victimId, {include: {model: User}})
        .then(victim => {
          Rescuer.findAll({
          where: {
            capacity: {$gte: victim.capacity},
            active: true,
            vehicle: victim.vehicle
          },
          include: {model: User}
        })
          .then(async rescuers => {
        const closest = await shortestDistance(rescuers, victim.latitude, victim.longitude)
        text_match(victim, closest)
        res.json(closest)
        })
      })
      .catch(next))

function shortestDistance(list, lat, long) {
  var shortest = list[0]
  var d = distance(list[0].dataValues.latitude, list[0].dataValues.longitude, lat, long)
  var tmpDistance = null;
  for (var i = 1; i < list.length; i++) {
    tmpDistance = distance(list[i].dataValues.latitude, list[i].dataValues.longitude, lat, long)
    if (tmpDistance < d) {
      shortest = list[i]
    }
  }
  return shortest
}

function distance(rlat,rlon,vlat,vlon) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(vlat-rlat);  // deg2rad below
  var dLon = deg2rad(vlon-rlon);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(vlat)) * Math.cos(deg2rad(rlat)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

async function text_match(victim, rescuer) {
  var info = await reverse_geocode(victim.latitude, victim.longitude)
  var address = info.street + ", " + info.adminArea5 + " " + info.adminArea3 + " " + info.postalCode
  var victimText = rescuer.user.name + " is on their way to help! You can can contact them at " + rescuer.phoneNumber;
  var rescuerText = victim.user.name + " needs your help! Please prepare to take " + victim.capacity + " civilians to safety. Contact them at " + victim.phoneNumber + ". Address:\n"+ address;

  nexmo.message.sendSms(
    '12016728862', rescuer.phoneNumber, rescuerText,
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );
  sleep(1000)
  nexmo.message.sendSms(
    '12016728862', victim.phoneNumber, victimText,
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function reverse_geocode(latitude, longitude) {
  return axios.get('http://www.mapquestapi.com/geocoding/v1/reverse', {
    params: {
      key: 'iFGHMM0mA1ka8jgdcaGiMdzcDOXp7bjZ',
      location: latitude+','+longitude
    }}
  )
  .then(res => res.data.results[0].locations[0])
}
