const express = require("express");
let Contenedor = require("./productos");
let contenedor = new Contenedor();
const app = express();
const PORT = 8080;

app.get("/", (req, res, next) => {
  res.send("<h2> Hola desde el Servidor </h2> \n <h4>Todos los productos: localhost:8080/productos</h4>\n <h4>Productos aleatoriamente: localhost:8080/productoRandom </h4> ");
});

app.get("/productos", (req, res, next) => {
  res.send(contenedor.getAll());
});

app.get("/productoRandom", (req, res, next) => {
  res.send(contenedor.random());
});

const server = app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

server.on("error", (error) => console.log(error));
