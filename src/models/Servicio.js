const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  nombre: String,
  precio: Number
});

module.exports = mongoose.model("Servicio", servicioSchema);