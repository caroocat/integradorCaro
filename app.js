const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
// const router = require("./routes");
const { Producto, Categoria } = require("./products");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use("/", (req, res, next) => {
//   console.log("App is running");
//   next();
// });
// require("./routes")(app);
app.use(require("./routes/productos"));

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure("views", { noCache: true });

db.sync({ force: false })
  .then(() => {
    console.log("Sincronizado con la base de datos");
    app.listen(7777, function() {
      console.log("server escuchando en puerto 7777");
    });
  })
  .catch(error => console.log(error));
