const S = require("sequelize");
const sequelize = require("../db");

class Producto extends S.Model {}
Producto.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false
    },

    precio: {
      type: S.INTEGER,
      allowNull: false
    },

    descripcion: {
      type: S.TEXT,
      allowNull: false
    },

    disponible: {
      type: S.BOOLEAN,
      defaultValue: true
    },
    truncarDescripcion: {
      type: S.VIRTUAL,
      get: function() {
        if (this.descripcion) {
          return this.descripcion.slice(0, 20) + "...";
        } else {
          return "";
        }
      }
    }
  },
  { sequelize: sequelize, modelName: "producto" }
);

// Producto.addHook("beforeCreate", function(nombre) {
//   if (!this.disponible) {
//     this.nombre + "PRODUCTO NO DISPONIBLE";
//     console.log(this.title);
//   }
// });

module.exports = Producto;
