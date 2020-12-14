const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/games", (req, res) => {
  db.Game.findAll({})
    .then((allGames) => {
      console.log(allGames);
      res.render("games", { games: allGames });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/game/new", (req, res) => {
  res.render("new-game");
});

router.get("/games/:id/edit", (req, res) => {
  db.Game.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundGame) => {
    console.log(foundGame);
    res.render("edit-game");
  });
});

router.post("/api/games", (req, res) => {
  db.Game.create(req.body)
    .then((newGame) => {
      res.json(newGame);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/games/:id", (req, res) => {
  db.Game.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedGame) => {
      res.json(updatedGame);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/games/:id", (req, res) => {
  db.Game.destroy({
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
