const router = require("express").Router();
const homeRoutes = require("./api/home.routes");

router.use("/", homeRoutes);

module.exports = router;
