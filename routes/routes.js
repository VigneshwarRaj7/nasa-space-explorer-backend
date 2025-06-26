const express = require('express');
const router = express.Router();
const { getAPOD } = require('../controllers/controller');
const { getMarsRoverManifests } = require('../controllers/controller');
const { getMarsRoverPhotos } = require('../controllers/controller');
const { getAsteroids } = require('../controllers/controller');
const { getEarth } = require('../controllers/controller');



router.get('/apod', getAPOD); // Astronomy Picture of the Day

router.get('/mars-rover-manifests/:roverName', getMarsRoverManifests); // Mars Rover Manifests

router.get('/mars-rover-photos/rover-name/:roverName/sol/:sol', getMarsRoverPhotos); // Mars Rover Photos

router.get('/asteroids/start-date/:startDate/end-date/:endDate', getAsteroids); // Asteroids tracker

router.get('/earth/date/:date', getEarth); // Earth data, Pictures captured by EPIC

module.exports = router;