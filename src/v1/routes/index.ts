/**
 * 
 * Go to instantiate the Router into de Express Library
 * 
 * Notice: The Express library is import in ./src/index.js
 * 
 */
import express = require("express");

const router = express.Router();

/**
 * 
 * Go to create the first route
 * 
 * This route show a message from the root URL
 * 
 */

router  
    .route("/")
    .get((req: any, res: any) => {
        res.send(`<h2>It works! from ${req.baseUrl}</h2>`);
    });

    module.exports = router;