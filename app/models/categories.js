const { default: mongoose } = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

// create db model
const CategoryModel = mongoose.model("category", categoriesSchema);

module.exports = CategoryModel;
