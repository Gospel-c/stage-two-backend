const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name string required!!!"] }

});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;