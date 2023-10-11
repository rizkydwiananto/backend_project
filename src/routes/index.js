//menggabungkan semua root
const { Router } = require("express");
const routes = Router();

const UserRoutes = require("./users.routes");

routes.use(UserRoutes);

module.exports = routes;
