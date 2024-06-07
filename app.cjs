// Modulo PRINCIPAL:
const express = require("express");

const path = require("path");

const app = express();

//Para probar local descomentar:
// Opción para utilizar un puerto desde una variable de entorno o el puerto 4004 por defecto
const PORT = process.env.PORT || 4004;

// Sirve archivos est?ticos desde la carpeta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para manejar la solicitud en la raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//app.listen(process.env.PORT, (error) => {
app.listen(PORT, (error) => {
    if (error) {
        console.log("El Server NO esta en funcionamiento", error)
    return
}
    console.log("El Server esta funcionando en el puerto " + PORT)
})