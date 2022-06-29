const valida = require ("../controllers/valida.controller");
const findLastTen = require("../controllers/guardaYConsulta.controller");
const SaveNum = require("../controllers/guardaYConsulta.controller")

module.exports = app =>{
    app.post("/api/numeros/new",valida.NewLote, SaveNum.SaveNum);
    app.get("/api/numeros/:id",findLastTen.findLastTen); 
}




