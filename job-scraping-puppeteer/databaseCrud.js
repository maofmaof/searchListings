const { jobbNuScrape } = require("./scraping/jobb");
const { MongoClient } = require('mongodb');
const { arbetsNuScrape } = require("./scraping/arbetsförmedlingen");

async function main() {
   //mongodb password 9mjeefMPt8EV4uSp

    let uri =  "mongodb+srv://maof:9mjeefMPt8EV4uSp@joblistings.twaae.mongodb.net/jobListings?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    let jobListings = await jobbNuScrape().then((jobListings) => {
        // console.log(jobListings)
        return jobListings;
    })

    let jobListings2 = await arbetsNuScrape().then((jobListings2) => {
       
        return jobListings2;
    })

    let allJobListings = jobListings.concat(jobListings2);

    try {
        await client.connect();
        await deleteListings(client);
        await createListing(client, allJobListings);
    }
    
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
    
} 

async function createListing(client, newJob) {
    const result = await client.db("JobAds").collection("jobs").insert(newJob);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function deleteListings(client) {
    const result = await client.db("JobAds").collection("jobs").deleteMany({});
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

module.exports = main;