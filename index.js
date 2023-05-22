const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

// const cors = require("cors");

// const whitelist = ["http://localhost:8080"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },

//   credentials: true,
// };

const app = express();
app.use(bodyParser.json());
app.use("/", routes);
// app.use(cors(corsOptions));

//MongoDB connection
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://user42:L4ur34FullStack@cluster1.mqvwtag.mongodb.net/moviedb?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, function () {
  console.log("Listening " + PORT);
});
