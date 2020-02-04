const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const morgan = require("morgan");
var path = require("path");
// const morgan = require("morgan");

const db = require("./models");



app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});