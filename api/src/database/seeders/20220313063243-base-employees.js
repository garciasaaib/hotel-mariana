'use strict';
// const bcrypt = require('bcrypt');
// const authConfig = require('../../config/auth')
const { hashPass } = require('../../utils/bcryptMethods')

module.exports = {
  async up(queryInterface, Sequelize) {
    // for employees
    await queryInterface.bulkInsert('positions', [
      { name: 'manager' },
      { name: 'receptionist' }
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        email: "garciasaaib@gmail.com",
        firstname: "Adrian",
        password: await hashPass("garciasaaib"),
        // password: "garciasaaib",
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
        password: await hashPass("sandino_varela"),
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
        password: await hashPass("santiagohibarra"),
        // password: "santiagohibarra",
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
        password: await hashPass("angelramirez"),
        nickname: "angelramirez",
        lastname: "Ramirez",
        secondlastname: "Chan",
        identification_name: "INE",
        identification_code: "ANCHAN465321",
        phone: 6631145982,
      },

    ], {});

    await queryInterface.bulkInsert('employees', [
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


    // for clients
    // 1. Only auth client
    // 2. Fulfilled client
    // 3. Middlefilled client
    await queryInterface.bulkInsert('client_types', [
      { level: "1", description: 'First time client' },
      { level: "2", description: 'Second to fourth time client' },
      { level: "3", description: 'Fifth to 20th times client' },
      { level: "4", description: 'More than 20 times client' }
    ], {});
    await queryInterface.bulkInsert('users', [
      {
        email: "adranuz@gmail.com",
        password: await hashPass("adranuz"),
      },
    ])


  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('positions', null, {});
    await queryInterface.bulkDelete('client_types', null, {});

  }
};
