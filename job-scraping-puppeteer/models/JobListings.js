const mongoose = require("mongoose")

const JobListingsSchema = mongoose.Schema( {
    title : String,
    link : String,
    companyName : String,
    bodyText : String,
    releaseDate : String
})

module.exports = mongoose.model('jobs', JobListingsSchema)