const express = require("express");
const router = express.Router();

const db = require("../models");

router.post("/playergames", (req, res) => {
  db.PlayerGames.create({
    playerId: req.body.playerId,
    gameId: req.body.gameId,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
