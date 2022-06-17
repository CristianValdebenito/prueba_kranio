const NewLote = require ("../controllers/valida.controller");
const findLastTen = require("../controllers/save.controller");

module.exports = app =>{
    app.post("/api/numeros/new",NewLote.NewLote);
    app.get("/api/numeros/:id",findLastTen.findLastTen); 
}




