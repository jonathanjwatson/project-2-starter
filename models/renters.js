module.exports = function (sequelize, DataTypes) {
    const Renters = sequelize.define("Renters", {
      email: DataTypes.STRING,
      numGuest: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
      reason: DataTypes.STRING,
      locationId: DataTypes.STRING,
      bookingId: DataTypes.STRING,
    
      // TODO: Days of the week?
    },
  {timestamps:false});
  
    Renters.associate = function (models) {
      Renters.belongsToMany(models.Host, {
        through: "Bookings",
        foreignKey: "bookingID",
      });
    };
  
    return Renters;
  };
  