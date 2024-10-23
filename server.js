const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data');
const authRoutes = require('./routes/auth');
const app = express();

app.use(bodyParser.json());

// Rutas
app.use('/api/data', dataRoutes);
app.use('/api/auth', authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});