const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/players", (req, res) => {
  db.Player.findAll({})
    .then((allPlayers) => {
      console.log(allPlayers);
      res.render("players", { players: allPlayers });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/player/new", (req, res) => {
    res.render("new-player");
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

module.exports = router;
