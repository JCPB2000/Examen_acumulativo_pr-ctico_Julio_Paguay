// Modelo que define la estructura de la colección tareas.

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaLimite: {
    type: String,
    required: true
  },
  prioridad: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
});

// Se exporta el modelo correctamente
module.exports = mongoose.model('Task', taskSchema);
