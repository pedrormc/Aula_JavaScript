const express = require('express');

const app = express();

const db = require('./models/db');

app.get("/", async (req, res)=>{
     res.send("pagina inicial teste-");
});

app.post("/cadastrar", async (req, res)=>{
    res.send("pagina de cadastro");
});







app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});