'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client_type.init({
    name: DataTypes.STRING,
    surveyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClientType',
  });
  return Client_type;
};