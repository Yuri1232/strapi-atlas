module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/products/:slug",
      handler: "product.updateBySlug",
      config: {
        auth: false, // Or true, depending on your authentication settings
      },
    },
    {
      method: "GET",
      path: "/products/find-one/:slug",
      handler: "product.findBySlug",
      config: {
        auth: false, // Or true, depending on your authentication settings
      },
    },
    {
      method: "POST",
      path: "/products",
      handler: "product.create",
      config: {
        auth: false, // Or true, depending on your authentication settings
        policies: [],
        middlewares: [],
      },
    },
  ],
};
