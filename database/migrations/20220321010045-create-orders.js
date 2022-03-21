'use strict';

const { ORDERS_TABLE, OrderSchema } = require("../models/order.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDERS_TABLE, OrderSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDERS_TABLE);
  }
};
