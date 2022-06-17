const mongoose = require("mongoose");
const NumerosImparesSchema = new mongoose.Schema({
    num_impar:{
        type: Number,
        required: false
    },
},{timestamps: true});

const NumerosImpares = mongoose.model("NumerosImpares",NumerosImparesSchema);

module.exports = NumerosImpares;