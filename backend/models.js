const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    value: Number,
    timestamp: Date
});
const Data = mongoose.model('Dataa', DataSchema)
module.exports = Data;
