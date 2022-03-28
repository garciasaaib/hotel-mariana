'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nickname: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      secondlastname: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      identification_name: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      identification_code: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        // allowNull: false,
        type: Sequelize.BIGINT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};