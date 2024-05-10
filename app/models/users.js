const { default: mongoose } = require("mongoose");

const UsersSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, lowercase: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  otp: {
    type: Object,
    default: {
      code: 0,
      expire: 0,
    },
  },
  bills: { type: [], default: [] },
  discount: { type: Number, default: 0 },
  birthday: { type: String },
  roles: { type: [String], default: ["USER"] },
});

const UsersModel = mongoose.model("users", UsersSchema);

module.exports = UsersModel;
