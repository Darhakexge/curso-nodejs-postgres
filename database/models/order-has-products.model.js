const { Model, DataTypes, Sequelize } = require("sequelize");
const { ORDERS_TABLE } = require("./order.model");
const { PRODUCTS_TABLE } = require("./product.model");

const TABLE_NAME = "order_has_products";

const OrderHasProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
};

class OrderHasProduct extends Model {
  static associate(/* models */) {
    // this.hasOne(models.Customer, {
    //   as: "customer",
    //   foreignKey: "userId"
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "OrderHasProduct",
      timestamps: false
    };
  }
}

module.exports = {
  ORDER_HAS_PRODUCTS_TABLE: TABLE_NAME,
  OrderHasProductSchema,
  OrderHasProduct
};
