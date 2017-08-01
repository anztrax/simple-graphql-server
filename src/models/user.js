export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username : { type : DataTypes.STRING }
  });

  User.associate = (models) => {
    //1 to many with board
    User.hasMany(models.Board, {
      foreignKey : 'owner'
    });

    //1 to many with suggestions
    User.hasMany(models.Suggestion, {
      foreignKey: 'creatorId'
    })
  };

  return User;
}