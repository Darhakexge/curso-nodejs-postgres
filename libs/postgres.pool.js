const { Pool } = require("pg");
const { db_host, db_port, db_user, db_password, db_database, isProd, dbUrl } = require("../config/config");

const USER = encodeURIComponent(db_user);
const PASSWORD = encodeURIComponent(db_password);
const options = {};

if (isProd) {
  options.connectionString = dbUrl;
} else {
  options.connectionString = `postgres://${USER}:${PASSWORD}@${db_host}:${db_port}/${db_database}`;
}

options.ssl = {
  rejectUnauthorized: !isProd
};

const pool = new Pool(options);

module.exports = pool;
