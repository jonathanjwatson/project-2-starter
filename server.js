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
app.get("/change",(req,res)=> {
  res.render("change");
});

app.get("/studio", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Art studio",id:"S1", img:"https://images.pexels.com/photos/3880775/pexels-photo-3880775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",description: This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use.",  },
      { name: "Music studio",id:"S2", img:"https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,description: "Lorem Ipsum",},
      { name: "Dance studio", id:"S3",img:"https://images.pexels.com/photos/3467377/pexels-photo-3467377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ,description: "Hey lolo",  },
    ],
  });
});

app.get("/outdoor", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Art out",id:"O1", description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use .",},
      { name: "Music out",id:"O2", description: "Lorem Ipsum",},
      { name: "Dance out", id:"O3",description: "Hey lolo",  },
    ],
  });
});
app.get("/urban", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Art urb",id:"U1", description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use .",},
      { name: "Music out",id:"U2", description: "Lorem Ipsum",},
      { name: "Dance out", id:"U3",description: "Hey lolo",  },
    ],
  });
});
app.get("/confirm" ,(req,res )=>{
  res.render("confirm")
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
