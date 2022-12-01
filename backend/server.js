const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
const hostname = "localhost";

// connect to database
mongoose
    .connect(process.env.MONG_URI, { useNewUrlParser: true })
    .then((r) => console.log(`MongoDB Atlas Connected`))
    .catch((error) => console.log(error));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    next();
});

app.use(cors());
app.use(express.json());

//require routes
// app.use("/path", require("./route/etc"))
app.use("/api/tracks", require("./routes/track"));

app.use((err, req, res, next) => {
    console.log(err);
    next();
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
    console.log(`Client running at http://${hostname}:3000/`)
})