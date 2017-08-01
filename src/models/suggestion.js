export default (sequelize, DataTypes) => {
  const Suggestion = sequelize. define('suggestion', {
    text : { type : DataTypes.STRING }
  });

  return Suggestion;
}