const express = require('express');
const cors = require('cors');
const nasaRoutes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors(
    {
        origin: '*', // Allow all origins for simplicity; adjust as needed
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    }
));
app.use(express.json());

app.use('/api', nasaRoutes);

// Central error handler
app.use(errorHandler);

module.exports = app;