'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room_type.belongsTo(models.Room, { foreignKey: "id_room" })
      Room_type.hasMany(models.Room_photo)
    }
  }
  Room_type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room_type',
    tableName: 'room_types'

  });
  return Room_type;
};