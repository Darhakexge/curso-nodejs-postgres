'use strict';

const { CUSTOMERS_TABLE, CustomerSchema } = require("./../models/customer.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMERS_TABLE, CustomerSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMERS_TABLE);
  }
};
