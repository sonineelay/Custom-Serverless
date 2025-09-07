const { Sequelize } = require("sequelize");

const db_connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: "postgres", // or "mysql"
        logging: false,
    }
);

module.exports = { db_connection };
