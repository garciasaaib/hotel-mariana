'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'First Name'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'Email Address',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'Password',
      },
      username: {
        type: Sequelize.STRING,
        comment: 'User Name'
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'Last Name'
      },
      secondlastname: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'Second Lastname'
      },
      identification_name: {
        type: Sequelize.STRING,
        comment: 'ID Card Name'
      },
      identification_code: {
        type: Sequelize.STRING,
        comment: 'ID Card Code'
      },
      phone: {
        type: Sequelize.BIGINT,
        comment: 'Cellphone Number'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};