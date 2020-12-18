const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/hosts", (req, res) => {
  db.Host.findAll({
  })
    .then((allHosts) => {
      console.log(allHosts);
      res.render("hosts", { hosts: allHosts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/host/new", (req, res) => {
  res.render("new-host");
});

router.get("/hosts/:id/edit", (req, res) => {
  db.Host.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundHost) => {
    console.log(foundHost.email);
    res.render("edit-host", {
      email: foundHost.email,
      password: foundHost.password,
      firstName: foundHost.firstName,
      lastName: foundHost.lastName,
      id: foundHost.id,
    });
  });
});

router.post("/api/hosts", (req, res) => {
  db.Host.create(req.body)
    .then((newHost) => {
      res.json(newHost);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/hosts/:id", (req, res) => {
  db.Host.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedHost) => {
      res.json(updatedHost);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/hosts/:id", (req, res) => {
  db.Hosts.destroy({
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
