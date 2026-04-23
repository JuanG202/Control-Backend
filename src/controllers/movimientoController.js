const Movimiento = require("../models/Movimiento");

exports.crear = async (req, res) => {
  try {
    const { fecha, descripcion, valor, tipo, userId } = req.body;

    const movimiento = await Movimiento.create({
      fecha,
      descripcion,
      valor,
      tipo,
      userId
    });

    res.json(movimiento);
  } catch (error) {
    res.status(500).json({ error: "Error al crear movimiento" });
  }
};

exports.obtener = async (req, res) => {
  try {
    const { userId } = req.params;
    const movimientos = await Movimiento.find({ userId });
    res.json(movimientos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener movimientos" });
  }
};