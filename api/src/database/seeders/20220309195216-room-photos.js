'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Room_photos', [
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      { image_url: "https://bit.ly/3sZrYAN", id_room_type: 3 },
      
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },
      { image_url: "https://bit.ly/3I1bLzp", id_room_type: 1 },

      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 },
      { image_url: "https://bit.ly/3sZoxtV", id_room_type: 2 }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Room_photos', null, {});
  }
};
