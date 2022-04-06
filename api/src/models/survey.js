'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Survey.hasMany(models.Question, {
      //   // as: "questions",
      //   // through: "survey_question",
      //   // foreignKey: "id_question"
      // });
    }
  }
  Survey.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'survey',
  });
  return Survey;
};