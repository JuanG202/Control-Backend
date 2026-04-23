const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movimientos", require("./routes/movimientoRoutes"));
app.use("/api/servicios", require("./routes/servicioRoutes"));
app.use("/api/productos", require("./routes/productoRoutes")); // 👈 FIX

module.exports = app;