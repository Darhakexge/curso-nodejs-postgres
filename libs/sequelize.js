const { Sequelize } = require("sequelize");
const setupModels = require("../database/models/index");
const { db_host, db_port, db_user, db_password, db_database, isProd, dbUrl } = require("../config/config");

const USER = encodeURIComponent(db_user);
const PASSWORD = encodeURIComponent(db_password);
let URI = "";
const options = {
  dialect: "postgres",
  logging: !isProd,
};

if (isProd) {
  URI = dbUrl;
  options.ssl = {
    rejectUnauthorized: false
  };
} else {
  URI = `postgres://${USER}:${PASSWORD}@${db_host}:${db_port}/${db_database}`;
}

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;
