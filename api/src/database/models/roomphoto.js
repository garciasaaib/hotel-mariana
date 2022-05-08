'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Room_type.belongsTo(models.Room)
      // Room_photo.hasOne(models.Room_type, { as: 'id_room_type'})
    }
  }
  RoomPhoto.init({
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoomPhoto',
  });
  return RoomPhoto;
};