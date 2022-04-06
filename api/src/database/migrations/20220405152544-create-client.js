'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
      },
      id_client_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "client_types",
          key: "id"
        },
      },
      is_discount_survey: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sign: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1234,
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
    await queryInterface.dropTable('clients');
  }
};