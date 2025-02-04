'use strict';

const { ProductSchema, PRODUCTS_TABLE } = require("./../models/product.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
  }
};
