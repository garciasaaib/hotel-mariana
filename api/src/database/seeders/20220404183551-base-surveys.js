'use strict';
// const { Survey } = require('../../models')
module.exports = {
  async up(queryInterface, Sequelize) {

    // Survey.bulkCreate([

    // ])
    // await queryInterface.bulkInsert('surveys', [
    //   {
    //     name: 'Survey for new clients',
    //     questions: [
    //       "How was your first experience?",
    //       "Are you coming in a second time?",
    //     ]
    //   },
    //   {
    //     name: 'Survey for normal clients',
    //     questions: [
    //       "What did like the most to see again",
    //       "Did you take someone new?",
    //     ]
    //   },
    //   {
    //     name: 'Survey for premium clients',
    //     questions: [
    //       "Are you ok with our service?",
    //       "What would you like to do next time?",
    //     ]
    //   },
    //   {
    //     name: 'Experimental survey',
    //     questions: [
    //       "Do you believe in aliens?",
    //       "Have you ever tried ayawasca?",
    //     ]
    //   }
    // ], { include: 'questions' });

    // await queryInterface.bulkInsert('questions', [
    //   { content: 'Survey for new clients' },
    //   { content: 'Survey for normal clients' },
    //   { content: 'Survey for premium clients' },
    //   { content: 'Experimental survey' }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('question_survey', null, {});

    // await queryInterface.bulkDelete('surveys', null, {});
    // await queryInterface.bulkDelete('questions', null, {});
  }
};
