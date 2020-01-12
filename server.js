const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const portServer = 8081;

const app = express();
app.use(cors());
app.use(express.json());



/**Connect MongoDB */
mongoose.connect("mongodb+srv://warleyhenrique:warleyhenrique@cluster0-nf5ir.gcp.mongodb.net/agenda?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Mongo db connectado!");
    });


/**Load all models */
requireDir("./src/models");

/**Router */
app.use('/', require("./src/routes"));

app.listen(portServer);