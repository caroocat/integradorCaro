const S = require("sequelize");
const sequelize = require("../db");

class Categoria extends S.Model {}
Categoria.init(
  {
    nombre: {
      type: S.STRING
    }
  },
  { sequelize: sequelize, modelName: "categoria" }
);

module.exports = Categoria;
