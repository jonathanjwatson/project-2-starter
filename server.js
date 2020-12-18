const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const path = require("path");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

<<<<<<< HEAD
const renterController = require("./controllers/renterController");
=======
const renterControllers = require("./controllers/renterControllers");
>>>>>>> main

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
<<<<<<< HEAD
app.get("/propertyType", (req, res) => {
  res.render("propertyType", {
    listings:[{name:"art studio"},{name:"music studio"},{name:"workshop"}]
  });
});

app.use(renterController);
=======
app.get("/type", (req, res) => {
  res.render("type", {
    listings: [
      { name: "art studio", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80", description: "Yes Sir", isNotBooked: true },
      { name: "music studio", description: "Lorem Ipsum", isNotBooked: true },
      { name: "dance studio", description: "Hey lolo", isNotBooked: true },
    ],
  });
});

app.use(renterControllers);
>>>>>>> main

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
