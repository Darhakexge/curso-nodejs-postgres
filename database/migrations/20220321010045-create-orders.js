'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { CUSTOMERS_TABLE } = require('../models/customer.model');
const { ORDERS_TABLE } = require("../models/order.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDERS_TABLE, {
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
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDERS_TABLE);
  }
};
