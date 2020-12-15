const express = require("express");
const router = express.Router();

const db = require("../models");

// GET route for renter, will return all bookings for the partical renter based on renterId
// Renter table will have multiple records for the same renterID because of multiple bookings  
router.get("/renters/:rentersId", (req, res) => {
  db.Renters.findAll({
    include: db.Bookings,
    where: {
        rentersId: req.params.rentersId
    }
  })
    .then((renter) => {
      console.log(renter);
      res.render("renter", { renter: renter });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/player/new", (req, res) => {
  res.render("new-player");
});

router.get("/players/:id/edit", (req, res) => {
  db.Player.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundPlayer) => {
    console.log(foundPlayer.email);
    res.render("edit-player", {
      email: foundPlayer.email,
      password: foundPlayer.password,
      firstName: foundPlayer.firstName,
      lastName: foundPlayer.lastName,
      id: foundPlayer.id,
    });
  });
});

router.post("/api/players", (req, res) => {
  db.Player.create(req.body)
    .then((newPlayer) => {
      res.json(newPlayer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/players/:id", (req, res) => {
  db.Player.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/players/:id", (req, res) => {
  db.Player.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
