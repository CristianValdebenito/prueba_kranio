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

module.exports.SaveNum = (req,res) => {
    const pares0 = req.numeros[0]
    const impares0 = req.numeros[1]
    console.log(pares0, "pares")
    console.log(impares0, "impares")

    pares0.map((num,indx)=>{
        let par = new NumerosPares({num_par:num}); 
        par.save();
    })
    impares0.map((numi,ii)=>{
        let impar = new NumerosImpares({num_impar:numi})
        impar.save()
    })
    res.json( { status: "ok" } );  
}









