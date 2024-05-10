const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  auther: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: [String], required: true },
  category: { type: mongoose.Types.ObjectId, required: true },
  comment: { type: [], default: [] },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  deslike: { type: [mongoose.Types.ObjectId], default: [] },
  bookMark: { type: [mongoose.Types.ObjectId], default: [] },
});

// create db model
const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel;
