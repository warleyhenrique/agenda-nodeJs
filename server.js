const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const portServer = 8081;

const app = express();
app.use(cors());
app.use(express.json());



/**Connect MongoDB */
mongoose.connect("mongodb://localhost/agenda",{
    useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("MongoDB conectado!")
    }).catch((err)=>{
        console.log('falha ao conectar ao mongoDb ' + err);
    });

/**Load all models */
requireDir("./src/models");

/**Router */
app.use('/', require("./src/routes"));

app.listen(portServer);