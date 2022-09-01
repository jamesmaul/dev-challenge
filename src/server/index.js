const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

var retornoEquipamentos;
var retornoMateriais;
var retornoOrdemCompra;
var retornoOrdemVenda;
var retornoMaoObra;

fs.readFile("../data/equipments.json", 'utf8', (err, jsonString) => {
    if(err){
        console.log("ERRO:", err);
        return;
    }
    console.log("Equipamentos:", jsonString);
    retornoEquipamentos = jsonString;
});

fs.readFile("../data/materials.json", 'utf8', (err, jsonString) => {
    if(err){
        console.log("ERRO:", err);
        return;
    }
    console.log("Materiais:", jsonString);
    retornoMateriais = jsonString;
});

fs.readFile("../data/purchase_orders.json", 'utf8', (err, jsonString) => {
    if(err){
        console.log("ERRO:", err);
        return;
    }
    console.log("Pedido de Compra:", jsonString);
    retornoOrdemCompra = jsonString;
});

fs.readFile("../data/sales_orders.json", 'utf8', (err, jsonString) => {
    if(err){
        console.log("ERRO:", err);
        return;
    }
    console.log("Pedido de Venda:", jsonString);
    retornoOrdemVenda = jsonString;
});

fs.readFile("../data/workforce.json", 'utf8', (err, jsonString) => {
    if(err){
        console.log("ERRO:", err);
        return;
    }
    console.log("Mão de Obra:", jsonString);
    retornoMaoObra = jsonString;
});

//RETORNO DOS EQUIPAMENTOS
app.get('/equipamentos', (req, res) => {
    res.send(retornoEquipamentos);
})

//RETORNO DOS MATERIAIS
app.get('/materiais', (req, res) => {
    res.send(retornoMateriais)
})

//RETORNO DAS COMPRAS
app.get('/pedidoCompra', (req, res) => {
    res.send(retornoOrdemCompra)
})

//RETORNO DAS VENDAS
app.get('/pedidoVenda', (req, res) => {
    res.send(retornoOrdemVenda)
})

//RETORNO DAS MAO DE OBRA
app.get('/maoObra', (req, res) => {
    res.send(retornoMaoObra)
})

app.listen(port, () => {
    console.log('SUBIU')
})