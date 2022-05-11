'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // RoomType.hasOne(models.RoomPhoto, {foreignKey: 'id_room_type'})
      // ReservationService.hasOne(models.Service, {foreignKey: 'idService'})
      // ReservationService.hasOne(models.Reservation, {foreignKey: 'idReservation'})

    }
  }
  ReservationService.init({
    // idReservation: DataTypes.INTEGER,
    // idService: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReservationService',
  });
  return ReservationService;
};