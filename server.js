const express = require("express");
const mongoose = require("mongoose");
const portServer = 8081;

const app = express();


/**Connect MongoDB */
mongoose.connect("mongodb+srv://warleyhenrique:warleyhenrique@cluster0-nf5ir.gcp.mongodb.net/agenda?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true});


app.listen(portServer);