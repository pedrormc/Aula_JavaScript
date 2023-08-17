const Sequelize = require('sequelize')
const db = require('./db');

const User = db.define('Users', {
 id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:  false,
    primaryKey : true
    },
 name:{

    type: Sequelize.STRING,

    type: Sequelize.STRING,

 },
 email:{
    type: Sequelize.STRING,
    type: Sequelize.STRING,
 }

});
 User.sync()
module.exports = User;

