'use strict';

const { ORDER_HAS_PRODUCTS_TABLE, OrderHasProductSchema } = require("../models/order-has-products.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_HAS_PRODUCTS_TABLE, OrderHasProductSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_HAS_PRODUCTS_TABLE);
  }
};
