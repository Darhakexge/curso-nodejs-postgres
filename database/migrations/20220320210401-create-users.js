'use strict';

const { UserSchema, USERS_TABLE } = require("./../models/user.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USERS_TABLE, UserSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
  }
};
