const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "categories";

const CategorySchema = {
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

class Category extends Model {
  static associate() {
    //TODO
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Category",
      timestamps: false
    };
  }
}

module.exports = {
  CATEGORIES_TABLE: TABLE_NAME,
  CategorySchema,
  Category
};
