const express = require("express");
const port = 3000;
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
// middleware for post method and json
const db = require("./config/db");

// connect db
db.connect();
const route = require("./routes");
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//http loger
app.use(morgan("combined"));
// template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.use(methodOverride("_method"));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resource", "views"));

route(app);

app.listen(port, () => {
  console.log(` app listening on port http://localhost:3000/`);
});
