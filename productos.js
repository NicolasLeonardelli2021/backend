let fs = require("fs");

class Contenedor {
  getAll() {
    try {
      let archivo = fs.readFileSync("./productos.txt", "utf-8");
      let arrays = archivo.split("-");
      if (arrays == "") {
        return null;
      } else {
        let productos = [];
        for (let i = 1; i < arrays.length; i++) {
          productos.push(JSON.parse(arrays[i]));
        }
        return productos;
      }
    } catch (error) {
      console.log(error);
    }
  }

  random() {
    let aleatorio = Math.floor(Math.random() * 5) + 1;
    for (let objeto of this.getAll()) {
      if (objeto.id == aleatorio) {
        return objeto;
      }
    }
  }
}
module.exports = Contenedor;
