const axios = require('axios');
const { enabled } = require('../app');
require('dotenv').config();

const NASA_API_KEY = process.env.NASA_API_KEY;

// This file contains functions to interact with NASA's APIs.

// Fetch Astronomy Picture of the Day (APOD)
exports.fetchAPOD = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
  return response.data;
};

// Fetch Mars Rover manifests
exports.fetchMarsRoverManifests = async (rover) => {
  const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${NASA_API_KEY}`);
  return response.data;
};

// Fetch Mars Rover photos for a specific sol (Martian day)
exports.fetchMarsRoverPhotos = async (rover, sol) => {
  
  const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}}&api_key=${NASA_API_KEY}`);
  return response.data;
}

// Fetch Asteroids data for a given date range
exports.fetchAsteroids = async (startDate, endDate) => {
  const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`);
  return response.data;
};

// Fetch Earth data, specifically pictures captured by EPIC
exports.fetchEarth = async (date) => {
  const reponse = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=IBSYqXNRUz8r6VzPwpCrbrfxcNpiRev6IpdKjrQm`);
  return reponse.data;
};


