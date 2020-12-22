const express = require("express");
const router = express.Router();
const Renters = require("../models/renters");

const db = require("../models");

// GET route for renter, will return all bookings for the specific renter based on renterId *EMAIL*
// Renter table will have multiple records for the same renterID because of multiple bookings  
router.get("/renters/:email", (req, res) => {
  db.Renters.findAll({
    include: db.Bookings,
    where: {
        //email is db col name
        email: req.params.email
    }
  })
    .then((renters) => {
      console.log(renters);
      res.render("renters", { renters: renters });
    })
    .catch((err) => {
      console.log(err);
    });
});

//copy
router.get("/renters/:rentersId", (req, res) => {
    db.Renters.findAll({
      include: db.Bookings,
      where: {
          rentersId: req.params.rentersId
      }
    })
      .then((renters) => {
        console.log(renters);
        res.render("renters", { renters: renters });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //copy

//GET route retrieve all bookings for a specific location ID
router.get("/renters/bookingDetails/:propertyTypeId", (req, res) => {
    db.Renters.findAll({
      where: {
          propertyTypeId: req.params.propertyTypeId
      },
      
    }).then((booking) => {
      res.render("bookingdetails", { bookingDetails: bookingDetailsObj })
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

//POST route for renter to create new booking on Renters AND Bookings table
//
router.post("/api/renters", (req, res) => {
  console.log(req.body)
  Renters.create(req.body)
    .then((newRenter) => {
      console.log(newRenter);
        // let bookingDetails = {
        //     "bookingId": req.body.bookingId, 
        //     "rentersId": req.body.rentersId,
        //     "locationTitle": req.body.locationTitle,
        //     "hostId": req.body.hostId
        // }
        // db.bookings.create(bookingDetails).then ((booking ) => {
        //     res.json(newRenter);
        // })
        res.json(newRenter);
        res.render("confirm", {name: "James"})
    })
    .catch((err) => {
      console.log(err);
    });
});
 
// PUT to allow them to update date or time or number of guests
router.put("/api/renters/:bookingID", (req, res) => {
  db.Renters.update(req.body, {
    where: {
      bookingID: req.params.bookingID,
    },
  })
    .then((updatedRenter) => {
      res.json(updatedRenter);
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE route for user to delete their booking
router.delete("/renters/deleteBooking/:bookingID", (req, res) => {
  db.Renters.destroy({
    where: {
      bookingID: req.params.bookingID,
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
