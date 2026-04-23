const Servicio = require("../models/Servicio");

exports.crear = async (req, res) => {
  try {
    const { nombre, precio, userId } = req.body;

    const servicio = await Servicio.create({
      nombre,
      precio,
      userId
    });

    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: "Error al crear servicio" });
  }
};

exports.obtener = async (req, res) => {
  try {
    const { userId } = req.params;
    const servicios = await Servicio.find({ userId });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener servicios" });
  }
};