const boom = require('@hapi/boom');

const { models } = require("../libs/sequelize");

class UserService {
  constructor() {
  }

  async create(data) {
    const user = await models.User.create(data);
    return user;
  }

  async find() {
    const users = await models.User.findAll({
      include: ["customer"]
    });
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ["customer"]
    });

    if (!user) {
      throw boom.notFound("User not found");
    }

    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = user.update(changes);

    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    user.destroy();
    return { id };
  }
}

module.exports = UserService;
