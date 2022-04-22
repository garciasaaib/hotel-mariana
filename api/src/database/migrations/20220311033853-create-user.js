'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
        type: Sequelize.STRING,
        unique: true,
        comment: 'Email Address',
        validate: {
          isEmail: {
            msg: 'Please enter a valid email'
          },
          notNull: {
            args: true,
            msg: "Required"
          },
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'Password',
        validate: {
          min: {
            args: 8,
            msg: "Must be 8 or more characters"
          },
          notNull: {
            args: true,
            msg: "Required"
          },
          isAlphanumeric: {
            args: true,
            msg: "At last 1 number & 1 letter"
          },
        }
      },
      username: {
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
    await queryInterface.dropTable('users');
  }
};