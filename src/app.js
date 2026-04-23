const express = require("express");
const cors = require("cors");
const productosRoutes = require("./routes/productoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movimientos", require("./routes/movimientoRoutes"));
app.use("/api/servicios", require("./routes/servicioRoutes"));
app.use("/api", productosRoutes);

module.exports = app;