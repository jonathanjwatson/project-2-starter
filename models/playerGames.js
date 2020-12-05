module.exports = function (sequelize, DataTypes) {
  const PlayerGames = sequelize.define(
    "PlayerGames",
    {
      playerId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return PlayerGames;
};
