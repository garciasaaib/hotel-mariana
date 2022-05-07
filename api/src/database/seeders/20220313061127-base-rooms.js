'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('RoomTypes', [
      {
        name: 'simple', price: 1000, max_guest: 10,
        description: "All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels."
      },
      {
        name: 'junior', price: 2500, max_guest: 10,
        description: 'Elegant and comfortable. The 40 m² junior suite rooms at the Geneve Mexico City hotel are spaces decorated in a classic style. They have King Size or two double beds, a living room integrated into the room that gives you extra space to work and rest. They are equipped with Wi-Fi at no additional cost, telephone, screen with satellite programming, safe, and bathroom with amenities.'
      },
      { name: 'suite', price: 6000, max_guest: 10, description: 'A suite is a much larger accommodation. It usually has an attached bathroom, a living area, and most times, includes a dining area as well. Think of it as a furnished apartment-like stay that can be anywhere between 400 sq. ft to 3000 sq. ft (or more!).' }
    ], {});

    await queryInterface.bulkInsert('RoomPhotos', [
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

    await queryInterface.bulkInsert('Rooms', [
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },
      { id_room_type: 1, roof: 1, is_available: true },

      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },
      { id_room_type: 1, roof: 2, is_available: true },

      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },
      { id_room_type: 1, roof: 3, is_available: true },

      { id_room_type: 1, roof: 4, is_available: true },
      { id_room_type: 1, roof: 4, is_available: true },
      { id_room_type: 1, roof: 4, is_available: true },
      { id_room_type: 1, roof: 4, is_available: true },
      { id_room_type: 1, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 2, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
      { id_room_type: 3, roof: 4, is_available: true },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
    await queryInterface.bulkDelete('RoomPhotos', null, {});
    await queryInterface.bulkDelete('RoomTypes', null, {});
  }
};
