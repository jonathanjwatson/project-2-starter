// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var Renters = sequelize.define("renters", {
    email: Sequelize.STRING,
    numGuest: Sequelize.INTEGER,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.STRING,
    reason: Sequelize.STRING,
    propertyID: Sequelize.STRING,
    bookingID: Sequelize.STRING,
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});


Renters.associate = function (models) {
  Renters.belongsToMany(models.Host, {
    through: "Bookings",
    foreignKey: "bookingID",
  });
}

// Syncs with DB
Renters.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Renters;
