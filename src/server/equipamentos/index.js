const express = require('express');
const fs = require('fs');

const app = express();

var retornoEquipamentos;

function readEquipamentos(){
    fs.readFile("../../data/equipments.json", 'utf8', (err, jsonString) => {
        if(err){
            console.log("ERRO:", err);
            return;
        }
        console.log("Equipamentos:", jsonString);
        retornoEquipamentos = jsonString;
    });

    //RETORNO DOS EQUIPAMENTOS
    app.get('/equipamentos', (req, res) => {
    res.send(retornoEquipamentos)
})
}

export default readEquipamentos;