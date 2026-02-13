// Rutas del servicio REST para tareas.

const express = require('express');
const router = express.Router();

// Importación correcta del modelo
const Task = require('../models/Task');


// ===============================
// POST - Registrar nueva tarea
// ===============================
router.post('/', async (req, res) => {
  try {

    const { titulo, descripcion, fechaLimite, prioridad, estado } = req.body;

    // Validación básica
    if (!titulo || !descripcion || !fechaLimite || !prioridad || !estado) {
      return res.status(400).json({
        mensaje: 'Todos los campos son obligatorios'
      });
    }

    const nuevaTarea = new Task({
      titulo,
      descripcion,
      fechaLimite,
      prioridad,
      estado
    });

    const tareaGuardada = await nuevaTarea.save();

    res.status(201).json(tareaGuardada);

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al registrar la tarea',
      error: error.message
    });
  }
});


// ===============================
// GET - Consultar todas las tareas
// ===============================
router.get('/', async (req, res) => {
  try {

    const tareas = await Task.find();
    res.json(tareas);

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las tareas',
      error: error.message
    });
  }
});


module.exports = router;
