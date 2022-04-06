'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    id_user: DataTypes.INTEGER,
    is_discount_survey: DataTypes.BOOLEAN,
    id_client_type: DataTypes.INTEGER,
    sign: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'client',
  });
  return Client;
};