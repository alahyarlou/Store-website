const router = require("express").Router();
const homeRoutes = require("./api/home.routes");
const authRoutes = require("./user/auth.routes");

router.use("/", homeRoutes);
router.use("/user", authRoutes);

module.exports = router;
