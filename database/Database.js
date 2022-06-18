const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "root", "mysql", {
    host: "localhost",
    dialect: "mysql" 
}); 

module.exports = connection;