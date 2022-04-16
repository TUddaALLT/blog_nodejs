const express = require("express");
const port = 3000;
const morgan = require("morgan");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));
//http loger
app.use(morgan("combined"));
// template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resource", "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:3000/`);
});
