'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoomType.hasMany(models.RoomPhoto, {foreignKey: 'id_room_type'})
      RoomType.hasMany(models.Room, {foreignKey: 'id_room_type'})
      // RoomPhoto.belongsTo(models.RoomType)

      // Room_type.hasMany(models.Room_photo)
    }
  }
  RoomType.init({
    name: DataTypes.STRING,
    max_guest: DataTypes.INTEGER,
    price: DataTypes.FLOAT(2),
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RoomType',
  });
  return RoomType;
};