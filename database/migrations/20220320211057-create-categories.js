'use strict';

const { CategorySchema, CATEGORIES_TABLE } = require("./../models/category.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
