const express = require('express');
const router = express.Router();
const JobListings = require("../models/JobListings");
const scraper = require('../databaseCrud.js');
require('dotenv/config')


router.get('/listings', async (req, res ) => {

    try {
        const listings = await JobListings.find();
        res.json(listings)        
    }catch(err) {
         res.json( { message : err});
    }
})
router.delete('/:listingId', async (req, res) => {
        try {
           const removedListing = await JobListings.deleteOne({_id : req.params.listingId})
           res.json(removedListing)
        }
        catch (err) {
            res.json({message : err})
        }
})
router.post('/listingsNew', (req, res) => {
     scraper();

})


module.exports = router;