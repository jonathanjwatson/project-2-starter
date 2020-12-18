<<<<<<< HEAD
// const { STRING } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    const Host = sequelize.define("Host", {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      propertyTypeID: DataTypes.STRING,
      propertyDescribe: DataTypes.STRING,
    //   bookingID: DataTypes.STRING
    
    });

    return Host
  };
=======
module.exports = function (sequelize, DataTypes) {
  const Host = sequelize.define("Host", {
    email: DataTypes.STRING,
    numGuest: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    reason: DataTypes.STRING,
    propertyID: DataTypes.STRING,
    bookingID: DataTypes.STRING,
    title: DataTypes.STRING,
    hostId: DataTypes.STRING,
  });

  return Host;
};
>>>>>>> main
