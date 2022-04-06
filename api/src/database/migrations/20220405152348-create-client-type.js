'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('client_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_survey: {
        type: Sequelize.INTEGER,
        references: {
          model: "surveys",
          key: "id"
        },
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
    await queryInterface.dropTable('client_types');
  }
};