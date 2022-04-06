'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Question.belongsToMany(models., {
        // as: "surveys",
        // through: "survey_question",
        // foreignKey: "id_survey"
      // });
    }
  }
  Question.init({
    content: DataTypes.STRING,
    type: DataTypes.ENUM('text', 'checkbox', 'range', 'binnary')
  }, {
    sequelize,
    modelName: 'question',
  });
  return Question;
};