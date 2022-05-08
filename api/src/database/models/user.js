'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Client, {foreignKey: 'id_user'})
      // define association here
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    lastname: DataTypes.STRING,
    secondlastname: DataTypes.STRING,
    identification_name: DataTypes.STRING,
    identification_code: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    isValidEmail:DataTypes.BOOLEAN,
    isValidPhone:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};