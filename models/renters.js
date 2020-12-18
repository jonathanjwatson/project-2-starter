module.exports = function (sequelize, DataTypes) {
  const Renters = sequelize.define("Renters", {
    email: DataTypes.STRING,
    numGuest: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    reason: DataTypes.STRING,
    propertyID: DataTypes.STRING,
    bookingID: DataTypes.STRING,
    // TODO: Days of the week?
  });

  Renters.associate = function (models) {
    Renters.belongsToMany(models.Host, {
      through: "Bookings",
      foreignKey: "bookingID",
    });
  };

  return Renters;
};
