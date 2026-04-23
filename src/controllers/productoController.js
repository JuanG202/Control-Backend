const Producto = require("../models/Producto");

/* ───────── CREAR PRODUCTO ───────── */
exports.crearProducto = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ───────── OBTENER PRODUCTOS POR USUARIO ───────── */
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find({
      userId: req.params.userId
    });

    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ───────── ELIMINAR PRODUCTO ───────── */
exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ───────── ACTUALIZAR PRODUCTO ───────── */
exports.actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};