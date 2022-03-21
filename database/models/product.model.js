const { Model, DataTypes, Sequelize } = require("sequelize");
const { CATEGORIES_TABLE } = require("./category.model");

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
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORIES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: "category" });
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
