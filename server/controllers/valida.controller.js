const NumerosPares = require("../models/pares_model");
const NumerosImpares = require("../models/impares_model");
let enterosIngresados = [];

module.exports = {
    NewLote: (req, res) => {
         const arr = Object.values(req.body); 
         enterosIngresados = arr.map((num0,ii)=>Math.trunc(num0)).filter((num,i)=> Number.isInteger(num))
           if(enterosIngresados.length<10){
                res.json( { status: "Debe ingresar un lote de 10 numeros enteros, no menos" } );
           }else if(enterosIngresados.length>10){
                res.json( { status: "Debe ingresar un lote de 10 numeros enteros, no mas" } );
           }else if(enterosIngresados.length===10){
                const pares = enterosIngresados.filter((par,i)=>par%2===0)
                const impares = enterosIngresados.filter((impar,j)=>impar%2!==0)
                pares.map((num,indx)=>{
                    let par = new NumerosPares({num_par:num}); 
                    par.save();
                })
                impares.map((numi,ii)=>{
                    let impar = new NumerosImpares({num_impar:numi})
                    impar.save()
                })
                res.json( { status: "ok" } );
           }
    }
}






