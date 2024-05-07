const Controllers = require("../controllers");

module.exports = new class HomeControllers extends Controllers {
  mainPage(req, res, next) {
    try {
      return res.status(200).json({ message: "index page home" });
    } catch (error) {
      next(error);
    }
  }
};
