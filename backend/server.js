const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;
// connect to database
mongoose
    .connect(process.env.MONG_URI, { useNewUrlParser: true })
    .then(() => console.log(`DATABASE CONNECTED`))
    .catch((error) => console.log(error));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    //headers
    //next();
});

app.use(cors());
app.use(express.json);

//require routes
// app.use("/path", require("./route/etc"))

const hostname = '127.0.0.1';

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})