const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const fetch = require('node-fetch');

const app = express();

//Init middleware
app.use(logger);

// Gets All News
app.get('/GetAllNews?:parameters', (req, res) => {
    let searchTerm = req.originalUrl.replace('/GetAllNews?','');
    fetch("https://newsapi.org/v2/everything?" + searchTerm + "&sortBy=publishedAt&apiKey=def59b2c8beb4495896b7bd46a19ca4a", {
          "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            res.send(response);
        })
        .catch(err => { console.log(err); 
        });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))