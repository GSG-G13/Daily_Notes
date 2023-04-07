require("dotenv").config();
const {Pool} =  require('pg');

const connection =  new Pool ( {
    connectionString: process.env.DB_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});


module.exports = connection;