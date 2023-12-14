const express = require('express');
const app = express();
const PORT = 4000;
const db = require('./db.json');

app.post('/', async(req,res) => {

    [
        {"item":'milk', 'price':1.79},
        {"item":'cheese', 'price':2.99},
        {"item":'dog food', 'price':8.98},
    ]

    res.send(`Cookies have been saved.`)
});

app.get('/', (req,res) => {

    let offer;

    
})

app.listen(PORT, () => console.log(`Running: ${PORT}`));