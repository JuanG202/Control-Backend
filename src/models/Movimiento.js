const mongoose = require("mongoose");

const movimientoSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  fecha: Date,
  descripcion: String,
  valor: Number,
  tipo: String
}, { timestamps: true });

module.exports = mongoose.model("Movimiento", movimientoSchema);