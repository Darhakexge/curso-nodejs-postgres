const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMERS_TABLE } = require('./customer.model');
const { OrderHasProduct } = require('./order-has-products.model');

const TABLE_NAME = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + (item.price * item.OrderHasProduct.amount);
        }, 0);
      }

      return 0;
    }
  }
};

class Order extends Model {

  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });

    this.belongsToMany(models.Product, {
      as: "items",
      through: OrderHasProduct,
      foreignKey: "orderId",
      otherKey: "productId"
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: 'Order',
      timestamps: false
    };
  }
}

module.exports = {
  ORDERS_TABLE: TABLE_NAME,
  OrderSchema,
  Order
};
