const express = require("express");
const cors = require("cors");

const app = express();

const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:5173", // tu local
    "https://control-frontend-mu.vercel.app" // tu frontend en producción
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movimientos", require("./routes/movimientoRoutes"));
app.use("/api/servicios", require("./routes/servicioRoutes"));
app.use("/api/productos", require("./routes/productoRoutes")); // 👈 FIX

module.exports = app;