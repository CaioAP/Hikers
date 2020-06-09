const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const HikerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    picture: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Hiker', HikerSchema);