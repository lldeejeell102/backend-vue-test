const mongoose = require('./connection')

const PeopleSchema = new mongoose.Schema({
    name: String,
    title: String,
    location: String,
})

const People = mongoose.model('People', PeopleSchema)

module.exports = People