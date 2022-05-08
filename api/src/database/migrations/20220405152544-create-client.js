'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
      },
      id_client_type: {
        type: Sequelize.INTEGER,
        references: {
          model: "ClientTypes",
          key: "id"
        },
        defaultValue: 1,
      },
      is_discount_survey: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sign: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Clients');
  }
};