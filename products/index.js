const Producto = require("./producto");
const Categoria = require("./categoria");

Producto.hasMany(Categoria, { as: "category" });

module.exports = { Producto, Categoria };
