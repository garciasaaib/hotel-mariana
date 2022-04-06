'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Room_photo.hasOne(models.Room_type, {
      //   as: "type",
      //   foreignKey: "id_room_type"
      // })
      // Room_type.belongsTo(models.Room)
      Room_photo.hasOne(models.Room_type, { as: 'id_room_type'})
    }
  }
  Room_photo.init({
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room_photo',
  });
  return Room_photo;
};