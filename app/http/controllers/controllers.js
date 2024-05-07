const autoBind = require("auto-bind");

module.exports = class Controllers {
  constructor() {
    autoBind(this);
  }
  testMethod() {
    return "test method called";
  }
};
