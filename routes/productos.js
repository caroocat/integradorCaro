const express = require("express");
const router = express.Router();
// const Productos = require("../products/producto");
const productosRouter = require("../products").Producto;

router.get("/productos", (req, res) => {
  if (req.query.categoria) {
    productosRouter
      .findAll({
        where: {
          category: req.query.categoria
        }
      })
      .then(Productos => res.json(Productos));
  }
  productosRouter.findAll().then(Productos => res.json(Productos).status(200));
});

router.post("/productos", (req, res) => {
  productosRouter
    .create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: parseInt(req.body.precio)
    })
    .then(productos => {
      console.log(productos);
      res.status(201).json({
        message: "Created successfully",
        productos
      });
    })
    .catch(err => res.sendStatus(500));
});

router.get("/productos/:id", (req, res) => {
  productosRouter
    .findByPk(parseInt(req.params.id))
    .then(Producto => (Producto ? res.json(Producto) : res.sendStatus(404)));
});

router.put("/productos/:id", (req, res) => {
  productosRouter
    .update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    })
    .then(result => {
      res.json({
        message: "Updated successfully"
      });
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.delete("/productos/:id", (req, res) => {
  productosRouter
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.json({
        message: "successfully deleted"
      });
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

module.exports = router;
