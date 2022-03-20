const { Pool } = require("pg");
const { db_host, db_port, db_user, db_password, db_database } = require("../config/config");

const USER = encodeURIComponent(db_user);
const PASSWORD = encodeURIComponent(db_password);
const URI = `postgres://${USER}:${PASSWORD}@${db_host}:${db_port}/${db_database}`;

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;
