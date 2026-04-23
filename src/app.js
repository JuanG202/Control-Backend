const express = require("express");
const cors = require("cors");

const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://control-frontend-mu.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS no permitido"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.options("*", cors());

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movimientos", require("./routes/movimientoRoutes"));
app.use("/api/servicios", require("./routes/servicioRoutes"));
app.use("/api/productos", require("./routes/productoRoutes")); // 👈 FIX

module.exports = app;