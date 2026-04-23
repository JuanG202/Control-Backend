const express = require("express");
const router = express.Router();
const controller = require("../controllers/productoController");

/* ───────── RUTAS ───────── */

// Crear producto
router.post("/productos", controller.crearProducto);

// Obtener productos por usuario
router.get("/productos/:userId", controller.obtenerProductos);

// Eliminar producto
router.delete("/productos/:id", controller.eliminarProducto);

// Actualizar producto
router.put("/productos/:id", controller.actualizarProducto);

module.exports = router;