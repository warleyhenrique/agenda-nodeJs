const mongoose = require("mongoose");

const Contact = mongoose.model("Contact");


module.exports = {
    async index(req, res){
        const contacts = await Contact.find();
        return res.json(contacts);
    },

    async show(req, res){
        const contact = await Contact.findById(req.parms.id);
        return res.send(contact);
    },

    async store(req, res){
        const contact = await Contact.create(req.body);
        return res.send(contact);
    },

    async update(req, res){
        const contact = await Contact.findByIdAndUpdate(req.parms.id, req.body, {new: true});
        return res.send(contact);
    },

    async delete(req, res){
        await Contact.findByIdAndDelete(req.parms.id);
        return res.send();
    }
};