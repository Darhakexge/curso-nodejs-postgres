const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "products";

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  image: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
};

class Product extends Model {
  static associate() {
    //TODO
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Product",
      timestamps: false
    };
  }
}

module.exports = {
  PRODUCTS_TABLE: TABLE_NAME,
  ProductSchema,
  Product
};
