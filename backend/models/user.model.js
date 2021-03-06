const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
