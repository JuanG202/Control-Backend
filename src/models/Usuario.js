const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  usuario: { type: String, unique: true },
  password: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);