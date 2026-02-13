// Servidor principal del backend.
// Configura Express y la conexión a MongoDB.

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Permite conexión desde Angular
app.use(cors());

// Permite recibir datos en formato JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gestor_tareas')
  .then(() => {
    console.log('Conectado a MongoDB correctamente');
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });

// Importación de rutas
const taskRoutes = require('./routes/task.routes');

// Prefijo de la API
app.use('/api/tareas', taskRoutes);

// Puerto del servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
