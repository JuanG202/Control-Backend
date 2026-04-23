const User = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { nombre, usuario, password } = req.body;

    const existe = await User.findOne({ usuario });
    if (existe) return res.status(400).json({ error: "Usuario ya existe" });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      nombre,
      usuario,
      password: hash
    });

    res.json({ message: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ error: "Error servidor" });
  }
};

exports.login = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const user = await User.findOne({ usuario });
    if (!user) return res.status(400).json({ error: "Usuario no existe" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      id: user._id,
      nombre: user.nombre
    });

  } catch (error) {
    res.status(500).json({ error: "Error servidor" });
  }
};