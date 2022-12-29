const mongoose = require('./database');
const { Schema } = mongoose;

const backProductionSchema = new Schema({
    id_product: String,
    id_pr: String,
    id_ag: String,
    status: String,
    time:{
        type: Date,
        default: Date.now()
    }
})

const backProduction = mongoose.model('back_production', backProductionSchema);
module.exports = backProduction;