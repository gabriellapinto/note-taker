// Imports express and routes
const express = require('express');
const apiRouter = require('./routes/api');
const htmlRouter = require('./routes/html');

// Defines the port being used and adds express to the app variable
const PORT = process.env.port || 3001;
const app = express();

// Middleware to turn data into readable json
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// Uses the routers for the server 
app.use('/', htmlRouter);
app.use('/api', apiRouter)

// Displays that the port is being listened to
app.listen(PORT, () => console.log(`App now listening on port http://localhost:${PORT}`));