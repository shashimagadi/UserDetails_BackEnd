const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    image: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("UserDetails", userSchema);
module.exports = UserDetails;
