const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    host: `${process.env.HOST}`,
    port: process.env.PORT,
    database: `${process.env.DATABASE}`,
});

module.exports = pool;
