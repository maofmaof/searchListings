const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
require('dotenv/config')

app.use(express.json(), cors());

const getRoute = require('./routes/get');

app.use(getRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("DB CONNECTED");
})


app.listen(3000);