'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('client_types', [
      { name: 'Survey for new clients' },
      { name: 'Survey for normal clients' },
      { name: 'Survey for premium clients' },
      { name: 'Experimental survey' }
    ], {});

    // await queryInterface.bulkInsert('clients', [
    //   { name: 'Survey for new clients' },
    //   { name: 'Survey for normal clients' },
    //   { name: 'Survey for premium clients' },
    //   { name: 'Experimental survey' }
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('client_types', null, {});
    // await queryInterface.bulkDelete('clients', null, {});
  }
};
