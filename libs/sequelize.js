const { Sequelize } = require("sequelize");
const { db_host, db_port, db_user, db_password, db_database } = require("../config/config");
const setupModels = require("../database/models/index");

const USER = encodeURIComponent(db_user);
const PASSWORD = encodeURIComponent(db_password);
const URI = `postgres://${USER}:${PASSWORD}@${db_host}:${db_port}/${db_database}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
