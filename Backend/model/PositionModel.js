const mongoose = require('mongoose');

const {PositionSchema} = require('../Schemas/PositionSchema');
const PositionModel =  mongoose.model('position', PositionSchema);

module.exports = PositionModel;