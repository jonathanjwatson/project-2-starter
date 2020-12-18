const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const path = require("path");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

const renterControllers = require("./controllers/renterControllers");

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Handle POST body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(path.join(__dirname, "public")));

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

// ROUTES

// Views Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/renter", (req, res) => {
  res.render("renter");
});
app.get("/host", (req, res) => {
  res.render("host");
});
app.get("/type", (req, res) => {
  res.render("type", {
    listings:[{name:"art studio"},{name:"music studio"},{name:"dance studio"}]
  });
});

app.use(renterControllers);

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
});
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
