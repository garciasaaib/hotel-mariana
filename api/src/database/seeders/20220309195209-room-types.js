'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Room_types', [
      {
        name: 'simple',
        price: 1000,
        max_guest: 10
      },
      {
        name: 'junior',
        price: 2500,
        max_guest: 10
      },
      {
        name: 'suite',
        price: 6000,
        max_guest: 10
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     *return queryInterface.bulkDelete('Users', null, {});
     * Example:
     */
    await queryInterface.bulkDelete('Room_types', null, {});
  }
};
