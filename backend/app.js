// Importar las dependencias necesarias
const express = require('express');
const path = require('path');

// Inicializar la aplicación Express
const app = express();

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
