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
app.get("/change",(req,res)=> {
  res.render("change");
});

app.get("/studio", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Art Studio",id:"S1", img:"https://images.pexels.com/photos/3880775/pexels-photo-3880775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",description: "This beautiful art studio is located off Krog Street in downtown Atlanta.It can be used for a class or single use.",  },
      { name: "Music Studio",id:"S2", img:"https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Grammy award winners wanted. Modern music studio available weekends only.",},
      { name: "Dance Studio", id:"S3",img:"https://images.pexels.com/photos/3467377/pexels-photo-3467377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ,description: "Want to live like Debbie Allen for a while? Well look into this glammorous dance studio. Available weekdays 6pm to 8pm",  },
    ],
  });
});

app.get("/outdoor", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Backyard", id:"O1", img:"https://images.pexels.com/photos/1843647/pexels-photo-1843647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "See yourself in this serene backyard space. Available weekends from March to June.",},
      { name: "Pool House", id:"O2", img:"https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Pool partys await you in this luxurious pool with clubhouse use. Summer months only , seven days a week 11am-8pm.",},
      { name: "Hayfield", id:"O3", img:"https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Field trips ,photo opportunitys and picnics are yours in this rustic hayfield. Available Spring to Fall , weekends only.",  },
    ],
  });
});
app.get("/urban", (req, res) => {
  res.render("propertyType", {
    listings: [
      { name: "Warehouse", id:"U1", img:"https://images.pexels.com/photos/162379/lost-places-pforphoto-leave-factory-162379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Warehouse space that needs to be seen . ",},
      { name: "Colorful Court", id:"U2", img:"https://images.pexels.com/photos/1702624/pexels-photo-1702624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "Whats cooler than basketball on a colorful court? Nothing. Book it today and play!",},
      { name: "Rainbow Ave.", id:"U3", img:"https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", description: "A multi colored street of dreams . A more picture perfect place you'll never see.",  },
    ],
  });
});

app.get("/confirm/:id", function(req, res, next) {
  res.render("confirm", {output: req.params.id})
})

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
