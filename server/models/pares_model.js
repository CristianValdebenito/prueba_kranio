const mongoose = require("mongoose");
const NumerosParesSchema = new mongoose.Schema({
    num_par:{
        type: Number,
        required: false
    },
},{timestamps: true});

const NumerosPares = mongoose.model("NumerosPares",NumerosParesSchema);

module.exports = NumerosPares;