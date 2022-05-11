'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReservationRoom.init({
    // idReservation: DataTypes.INTEGER,
    // idRoom: DataTypes.INTEGER,
    // startsAt: DataTypes.DATE,
    // endsAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ReservationRoom',
  });
  return ReservationRoom;
};