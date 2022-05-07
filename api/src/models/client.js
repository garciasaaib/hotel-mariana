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
      // Client.hasOne(models.Client_type, { as: 'id_client_type'})
      // Client.hasOne(models.User, { as: 'id_user'})
    }
  }
  Client.init({
    // id_user: DataTypes.INTEGER,
    isDiscountSurvey: DataTypes.BOOLEAN,
    // id_client_type: DataTypes.INTEGER,
    sign: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
  });
  return Client;
};