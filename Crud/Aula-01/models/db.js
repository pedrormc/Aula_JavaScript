const Sequelize = require('sequelize');
 const sequelize = new Sequelize("robertin","root", "123456",{
    host:'localhost',
    dialect: 'mysql'
 });
 sequelize.authenticate()
 .then(function(){
    console.log("tudo certin meu nobre")
 }).catch(function(){
    console.log("erro: não conectou com o db")
 });
 module.exports = sequelize;