require('dotenv').config(); // To load environment variables
const { Pool } = require('pg');

// Create a new connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Export the pool object to use it in other parts of the app
module.exports = pool;
