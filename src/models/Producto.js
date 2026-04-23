const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  costo: {
    type: Number,
    required: true
  },
  precioVenta: {
    type: Number,
    required: true
  },
  margen: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Producto", productoSchema);