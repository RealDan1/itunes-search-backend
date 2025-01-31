const express = require('express');
const cors = require('cors');
const searchRoute = require('./routes/searchRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json()); // Parse JSON in built in express middleware
app.use(express.urlencoded({ extended: true }));

searchRoute(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
