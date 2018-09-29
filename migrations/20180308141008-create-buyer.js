'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buyers', {
      account_number: {
        type: Sequelize.INTEGER
      },
      business_address: {
        type: Sequelize.STRING
      },
      business_name: {
        type: Sequelize.STRING
      },
      business_phone: {
        type: Sequelize.STRING
      },
      business_reg_number: {
        type: Sequelize.STRING
      },
      buyer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyer_signature_id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      interest_rate: {
        type: Sequelize.STRING
      },
      passwod: {
        type: Sequelize.STRING
      },
      penalty_rate: {
        type: Sequelize.STRING
      },
      percentage_amount: {
        type: Sequelize.STRING
      },
      supplier_id: {
        type: Sequelize.INTEGER
      },
      tax_number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('buyers');
  }
};