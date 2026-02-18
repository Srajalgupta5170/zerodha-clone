const mongoose = require ('mongoose');


const{ HoldingSchema} = require ('../Schemas/HoldingSchema');

const HoldingsModel = new mongoose.model('holding', HoldingSchema);

module.exports = HoldingsModel; 