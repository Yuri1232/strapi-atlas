"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async updateBySlug(ctx) {
    const { slug } = ctx.params;
    const updateData = ctx.request.body.data; // Assuming the data is inside the "data" key

    // Find the customer by slug and populate nested fields (adjust this as needed)
    const customer = await strapi.db.query("api::product.product").findOne({
      where: { slug },
      populate: ["related_field_1", "related_field_2"], // Add related fields here
    });

    if (!customer) {
      return ctx.notFound(`Customer with slug "${slug}" not found`);
    }

    // Update the customer with the provided data
    const updatedCustomer = await strapi.db
      .query("api::product.product")
      .update({
        where: { slug },
        data: updateData,
      });

    // Sanitize and return the updated customer data
    const sanitizedEntity = await this.sanitizeOutput(updatedCustomer, ctx);
    return this.transformResponse(sanitizedEntity);
  },
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.db.query("api::product.product").findOne({
      where: { slug },
      populate: ["image"], // Adjust this to include any related fields you need
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  },
  async create(ctx) {
    const { data } = ctx.request.body;

    if (!data) {
      return ctx.badRequest("Missing customer data in request body");
    }

    try {
      // Create the customer
      const newCustomer = await strapi.db.query("api::product.product").create({
        data,
        // optional: include relations if needed
      });

      // Sanitize and return the response
      const sanitizedEntity = await this.sanitizeOutput(newCustomer, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      console.error("Error creating customer:", error);
      return ctx.internalServerError("Failed to create customer");
    }
  },
}));
