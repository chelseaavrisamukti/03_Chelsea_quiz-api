const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.pool.max,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquiew: dbConfig.pool.acquire,
            idle: dbConfig.pool.acquire.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//define semua models yang ada pada aplikasi
db.quizzes = require('./quiz')(sequelize, Sequelize);
module.exports;