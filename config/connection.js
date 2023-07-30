const Sequelize = require('sequelize');
require('dotenv').config(); // this is important!

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL) // for Heroku
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // for local host
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;