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
      Client.belongsTo(models.User, {foreignKey: 'id_user', as: 'user'})
      Client.belongsTo(models.ClientType, {foreignKey: 'id_client_type'})
    }
  }
  Client.init({
    is_discount_survey: DataTypes.BOOLEAN,
    sign: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};