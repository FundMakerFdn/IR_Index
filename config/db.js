const { Pool } = require("pg"); // Import PostgreSQL client
require("dotenv").config(); // Load environment variables

// Create the database connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Export the pool for use in the app
module.exports = pool;
