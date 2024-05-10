const { default: mongoose } = require("mongoose");

const SliderSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String },
  image: { type: String, required: true },
  type: { type: String, default: "main" },
});

const SliderModel = mongoose.model("slider", SliderSchema);

module.exports = SliderModel;
