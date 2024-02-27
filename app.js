//importação de modulo do express
const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao Node JS")
})

//app.get("/cadastrar/:item/:quantidade/:valor", function(req,res){
  //  res.send("Item: " + req.params.item + "</br>Quantidade: " + req.params.quantidade + "</br>Valor: " + req.params.valor + " reais" )})

app.get("/cadastrar/:produto", function(req, res){
    res.end("Produto: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto: " + req.params.produto + "\n" + "Modelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.end("SAC: " + req.params.sac + "\n" + "Produto: " + req.params.produto)
})