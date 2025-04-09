module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/customers/by-slug/:slug",
      handler: "customer.updateBySlug",
      config: {
        auth: false, // Or true, depending on your authentication settings
      },
    },
    {
      method: "GET",
      path: "/customers/find-one/:slug",
      handler: "customer.findBySlug",
      config: {
        auth: false, // Or true, depending on your authentication settings
      },
    },
    {
      method: "POST",
      path: "/customers",
      handler: "customer.create",
      config: {
        auth: false, // Or true, depending on your authentication settings
        policies: [],
        middlewares: [],
      },
    },
  ],
};
