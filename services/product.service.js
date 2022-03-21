const boom = require('@hapi/boom');
const { Op } = require("sequelize");
const { models } = require("../libs/sequelize");


class ProductsService {
  constructor() { }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find({ limit = 10, offset = 0, ...conditions }) {
    const products = await models.Product.findAll({
      include: ["category"],
      offset,
      limit,
      where: conditions
    });

    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ["category"]
    });

    if (!product) {
      throw boom.notFound("Product not found");
    }

    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const updatedProduct = product.update(changes);

    return updatedProduct;
  }

  async delete(id) {
    const product = await this.findOne(id);
    product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
