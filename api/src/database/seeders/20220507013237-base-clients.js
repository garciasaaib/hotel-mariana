'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      { name: 'Pizza', price:200, description: 'Pizza as client wants'},
      { name: 'Massage', price:200, description: 'Masage in the masage room with a professional massagist.'},
      { name: 'Room change by client', price:200, description: 'Client order to change to another room.'},
      { name: 'Room change by hotel', price:0, description: 'Room change for hotel fault.'},
      { name: 'Bufeth', price:200, description: 'Total access to the bufeth.'},
      { name: 'Yoga class', price:200, description: 'Yoga class, cost by day.'},
    ], {});
  },

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      { idClient: 1 },
    ], {});
  },
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReservationRoom', [
      { idReservation: 1, idRoom: 1, startsAt: '2022-05-09', endsAt: '2022-05-20' },
      { idReservation: 1, idRoom: 1, startsAt: '2022-05-09', endsAt: '2022-05-20' },
      { idReservation: 1, idRoom: 1, startsAt: '2022-05-09', endsAt: '2022-05-20' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
    await queryInterface.bulkDelete('ReservationRoom', null, {});
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
