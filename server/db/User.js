const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: String,
    password: String,
    trainerName: String,
    trainerCode: String,
    level: Number
  },
  { timestamps: true }
);

moduleExports = mongoose.model("User", UserSchema);
