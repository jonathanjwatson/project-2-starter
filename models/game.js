module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    maxNumPlayers: DataTypes.INTEGER,
    minNumPlayers: DataTypes.INTEGER,
    // TODO: Time range
  });

  Game.associate = function (models) {
    Game.belongsToMany(models.Player, {
      through: "PlayerGames",
      foreignKey: "gameId",
    });
  };

  return Game;
};
