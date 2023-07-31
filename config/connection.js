const Sequelize = require('sequelize');
const session = require('express-session');
const express = require('express');
require('dotenv').config(); // this is important!

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL) // for Heroku
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        }
    );
}

module.exports = sequelize;