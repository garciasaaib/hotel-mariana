'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Positions', [
      { name: 'manager' },
      { name: 'receptionist' }
    ], {});

    await queryInterface.bulkInsert('Users', [
      {
        email: "garciasaaib@gmail.com",
        firstname: "Adrian",
        password: "garciasaaib",
        nickname: "garciasaaib",
        lastname: "Garcia",
        secondlastname: "Saaib",
        identification_name: "INE",
        identification_code: "GASA94546",
        phone: 3111145982,
      },
      {
        email: "sandino_varela@gmail.com",
        firstname: "Sandino",
        password: "sandino_varela",
        nickname: "sandino_varela",
        lastname: "Varela",
        secondlastname: "Lopez",
        identification_name: "INE",
        identification_code: "SANDA5465",
        phone: 3331145982,
      },
      {
        email: "santiagohibarra@gmail.com",
        firstname: "Santiago",
        password: "santiagohibarra",
        nickname: "santiagohibarra",
        lastname: "Hernandez",
        secondlastname: "Ibarra",
        identification_name: "INE",
        identification_code: "SATHI465321",
        phone: 5531145982,
      },
      {
        email: "angelramirez@gmail.com",
        firstname: "Angel",
        password: "angelramirez",
        nickname: "angelramirez",
        lastname: "Ramirez",
        secondlastname: "Chan",
        identification_name: "INE",
        identification_code: "ANCHAN465321",
        phone: 6631145982,
      },
    ], {});

    await queryInterface.bulkInsert('Employees', [
      {
        id_position: 1,
        id_user: 1,
        is_active: true,
      },
      {
        id_position: 2,
        id_user: 2,
        is_active: true,
      },
      {
        id_position: 2,
        id_user: 3,
        is_active: true,
      },
      {
        id_position: 2,
        id_user: 4,
        is_active: true,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
