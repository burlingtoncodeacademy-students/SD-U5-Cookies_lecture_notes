const express = require('express');
const app = express();
const PORT = 4000; // Server is running on Port Number 4000
const db = require('./db.json'); // references the db.json content
const cookieParser = require('cookie-parser');

//* Middleware
app.use(cookieParser()); // provides us access to the middle ware so that we can see what cookies are stored.

//* Routes
app.post('/', async(req,res) => {

    await res.cookie('cart', 
        [
            {"item":'milk', 'price':1.79},
            {"item":'cheese', 'price':2.99},
            {"item":'dog food', 'price':8.98},
        ]
    )
    // Mock shopping cart User has found elsewhere

    res.cookie('session', [
        {"username": "bombadil1934", "password":"goldberry"}
    ])

    res.send(`Cookies have been saved.`)
});

app.get('/', (req,res) => {
    // console.log(req.cookies);

    const check = req.cookies; // Pulling stored cookies within the request.
    let offer; // variable to be set based off DB

    if(check.cart) {
        let numCartItems = check.cart.length; // checking length of cookie "items".
        let noMatches = 0;

        check.cart.every(obj => {
            offer = db.filter(i => i.item == obj.item && i.price < obj.price);
            noMatches++; // updating count if no matches

            return offer.length > 0 || numCartItems === noMatches ? false : true;
        });

        if(offer.length > 0) {
            res.send({
                offer: `Our ${offer[0].item} is ${offer[0].price}!`,
                cookies: check.cart
            }) 
        } else {
            res.send({
                offer: "No offers are better than what you already have",
                cookies: check.cart
            })
        }
    }

    // console.log(offer);
})

app.listen(PORT, () => console.log(`Running: ${PORT}`));