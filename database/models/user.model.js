const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
};

class User extends Model {
  static associate() {
    //TODO
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "User",
      timestamps: false
    };
  }
}

module.exports = {
  USERS_TABLE: TABLE_NAME,
  UserSchema,
  User
};
