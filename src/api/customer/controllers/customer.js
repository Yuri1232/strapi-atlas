"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::customer.customer",
  ({ strapi }) => ({
    async updateBySlug(ctx) {
      const { slug } = ctx.params;
      const updateData = ctx.request.body.data; // Assuming the data is inside the "data" key

      // Find the customer by slug and populate nested fields (adjust this as needed)
      const customer = await strapi.db.query("api::customer.customer").findOne({
        where: { slug },
        populate: ["related_field_1", "related_field_2"], // Add related fields here
      });

      if (!customer) {
        return ctx.notFound(`Customer with slug "${slug}" not found`);
      }

      // Update the customer with the provided data
      const updatedCustomer = await strapi.db
        .query("api::customer.customer")
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

      const customers = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: { slug },
          populate: "image",
        }
      );

      if (!customers || customers.length === 0) {
        return ctx.notFound(`Customer with slug "${slug}" not found`);
      }

      return ctx.send(customers[0]);
    },
    async create(ctx) {
      const { data } = ctx.request.body;

      if (!data) {
        return ctx.badRequest("Missing customer data in request body");
      }

      try {
        // Create the customer
        const newCustomer = await strapi.db
          .query("api::customer.customer")
          .create({
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
  })
);
