const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const path = require("path");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

const renterController = require("./controllers/renterController");

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
app.get("/studio", (req, res) => {
  res.render("type", {
    listings: [
      { name: "Art studio",id:"S1", description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use .",},
      { name: "Music studio",id:"S2", description: "Lorem Ipsum",},
      { name: "Dance studio", id:"S3",description: "Hey lolo",  },
    ],
  });
});

app.get("/outdoor", (req, res) => {
  res.render("type", {
    listings: [
      { name: "Art out",id:"S1", description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use .",},
      { name: "Music out",id:"S2", description: "Lorem Ipsum",},
      { name: "Dance out", id:"S3",description: "Hey lolo",  },
    ],
  });
});
app.get("/urban", (req, res) => {
  res.render("type", {
    listings: [
      { name: "Art urb",id:"S1", description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use .",},
      { name: "Music out",id:"S2", description: "Lorem Ipsum",},
      { name: "Dance out", id:"S3",description: "Hey lolo",  },
    ],
  });
});

app.use(renterController);

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
