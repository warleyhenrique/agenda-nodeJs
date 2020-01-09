const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    occupation:{type: String, required: true}
});

mongoose.model("Contact", ContactSchema);