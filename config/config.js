require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
  isProd: process.env.NODE_ENV === "production",
  dbUrl: process.env.DATABASE_URL
};
