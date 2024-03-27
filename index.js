const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");

//middlewares
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

//handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
  })
);
app.set("view engine", "handlebars");

//ruta get
app.get("/", function (req, res) {
  res.render("Dashboard", {
    layout: "Dashboard",
    productos: [
      { nombre: "Banana", imagen: "assets/images/banana.png" },
      { nombre: "Cebollas", imagen: "assets/images/cebollas.png" },
      { nombre: "Lechuga", imagen: "assets/images/lechuga.png" },
      { nombre: "Papas", imagen: "assets/images/papas.png" },
      { nombre: "Pimentón", imagen: "assets/images/pimenton.png" },
      { nombre: "Tomate", imagen: "assets/images/tomate.png" },
    ],
  });
});

app.use(express.static(__dirname + "/public"));

//servidor
app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
