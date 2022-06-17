const NumerosPares = require("../models/pares_model");
const NumerosImpares = require("../models/impares_model");

module.exports.findLastTen = (req,res) => {
    if(req.params.id === "par"){
        NumerosPares.find().sort({_id:-1}).limit(10)
        .then((lastNumeros)=>res.json({numeros:lastNumeros}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
    }else if(req.params.id === "impar"){
        NumerosImpares.find().sort({_id:-1}).limit(10)
        .then((lastNumeros)=>res.json({numeros:lastNumeros}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
    }else{
        res.json({message:"Algo salio mal",error:err})
    }
    
}
