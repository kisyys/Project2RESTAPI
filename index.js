const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://mongoviopemet:M3tr0p0l1a@cluster0.gkcribz.mongodb.net/moviedb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const port = 3000;

app.listen(PORT, function () {
    console.log("Listening 3000");
});