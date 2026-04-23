const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/servicioController");

router.post("/", ctrl.crear);
router.get("/:userId", ctrl.obtener);

module.exports = router;