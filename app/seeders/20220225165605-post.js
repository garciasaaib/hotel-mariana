'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'react for frontends',
        content: 'The next example is of a migration that uses async/await where you create an unique index on a new column, with a manually-managed transaction:',
        userId: 1
      },
      {
        title: 'express for backends',
        content: 'The next example is of a migration that uses async/await where you create an unique index on a new column, with a manually-managed transaction:',
        userId: 1
      },
      {
        title: 'sequelize for data scientist',
        content: 'The next example is of a migration that uses async/await where you create an unique index on a new column, with a manually-managed transaction:',
        userId: 3
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});

  }
};
