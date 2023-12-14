const express = require('express');
const app = express();
const PORT = 4000; // Server is running on Port Number 4000
const db = require('./db.json'); // references the db.json content

//* Middleware


//* Routes
app.post('/', async(req,res) => {

    [
        {"item":'milk', 'price':1.79},
        {"item":'cheese', 'price':2.99},
        {"item":'dog food', 'price':8.98},
    ]
    // Mock shopping cart User has found elsewhere

    res.send(`Cookies have been saved.`)
});

app.get('/', (req,res) => {

})

app.listen(PORT, () => console.log(`Running: ${PORT}`));