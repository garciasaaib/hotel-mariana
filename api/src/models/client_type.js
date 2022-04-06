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
    id_survey: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client_type',
    tableName: 'client_types',
    timestamps: false
  });
  return Client_type;
};