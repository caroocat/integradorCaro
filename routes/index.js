const express = require("express");

const productosRouter = require("./productos");

module.exports = server => {
  server.get("/productos", productosRouter);
  server.delete("/productos/:id", productosRouter.delete);
};
