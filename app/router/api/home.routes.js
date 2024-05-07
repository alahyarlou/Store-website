const HomeControllers = require("../../http/controllers/api/home.controllers");
const homeRouter = require("express").Router();

homeRouter.get("/", HomeControllers.mainPage);

module.exports = homeRouter;
