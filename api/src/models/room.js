'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Room_type}) {
      // define association here

      this.hasOne(Room_type, { foreignKey: 'id_room', as: 'type' })
    }
  }
  Room.init({
    roof: DataTypes.NUMBER,
    is_available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms'

  });
  return Room;
};
