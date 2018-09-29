'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoices', {
      amount: {
        type: Sequelize.STRING
      },
      amount_due: {
        type: Sequelize.STRING
      },
      bank_id: {
        type: Sequelize.INTEGER
      },
      buyer_id: {
        type: Sequelize.INTEGER
      },
      date_due: {
        type: Sequelize.DATE
      },
      date_issued: {
        type: Sequelize.DATE
      },
      date_paid: {
        type: Sequelize.DATE
      },
      invoice_currency: {
        type: Sequelize.STRING
      },
      invoice_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoice_note: {
        type: Sequelize.TEXT
      },
      payment_status: {
        type: Sequelize.STRING
      },
      produce_desp: {
        type: Sequelize.TEXT
      },
      produce_qty: {
        type: Sequelize.STRING
      },
      supplier_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('invoices');
  }
};