const { default: mongoose } = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  short_desc: { type: String, required: true },
  total_desc: { type: String, required: true },
  images: { type: [String], required: true },
  tags: { type: [String], required: true, default: [] },
  category: { type: mongoose.Types.ObjectId, required: true },
  comments: { type: [], required: true, default: [] },
  like: { type: [mongoose.Types.ObjectId], required: true, default: [] },
  deslike: { type: [mongoose.Types.ObjectId], required: true, default: [] },
  bookMark: { type: [mongoose.Types.ObjectId], required: true, default: [] },
  price: { type: Number, default: 0, required: true },
  discount: { type: Number, default: 0, required: true },
  count: { type: Number, required: true },
  type: { type: String, required: true },
  time: { type: String, required: true },
  format: { type: String, required: true },
  teacher: { type: mongoose.Types.ObjectId, required: true },
  fetuer: {
    type: Object,
    default: {
      width: "",
      height: "",
      weight: "",
      colors: [],
      model: [],
      madein: "",
    },
  },
});

// create db model
const ProductsModel = mongoose.model("products", productsSchema);

module.exports = ProductsModel;
