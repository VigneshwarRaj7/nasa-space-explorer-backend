const { fetchAPOD } = require('../services/service');
const { fetchMarsRoverManifests } = require('../services/service');
const { fetchMarsRoverPhotos } = require('../services/service');
const { fetchAsteroids } = require('../services/service');
const { fetchEarth } = require('../services/service');

// This file contains the controller functions that handle requests and responses for the NASA API endpoints.
//
// Fetch Astronomy Picture of the Day (APOD)
exports.getAPOD = async (req, res, next) => {
  try {
    const data = await fetchAPOD();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// Fetch Mars Rover manifests
exports.getMarsRoverManifests = async (req, res, next) => {
  
  try {
    const roverName = req.params.roverName.toLowerCase();
    const data = await fetchMarsRoverManifests(roverName);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// Fetch Mars Rover photos for a specific sol (Martian day)
exports.getMarsRoverPhotos = async (req, res, next) => {
  try {
    const rover = req.params.roverName.toLowerCase();
    const sol = req.params.sol;
    const data = await fetchMarsRoverPhotos(rover, sol);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

// Fetch Asteroids data for a given date range
exports.getAsteroids = async (req, res, next) => {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    // Implement the logic to fetch asteroids data here
    // For now, just returning a placeholder response
    console.log(startDate, endDate);
    const data = await fetchAsteroids(startDate, endDate);
    res.json(data);

  } catch (error) {
    next(error);
  }
}

// Fetch Earth data, specifically pictures captured by EPIC
exports.getEarth = async (req, res, next) => {
  try {
    const date = req.params.date;
    const data = await fetchEarth(date);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
