'use strict';
module.exports = (sequelize, DataTypes) => {
  var invoice = sequelize.define('invoice', {
    amount: DataTypes.STRING,
    amount_due: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER,
    date_due: DataTypes.DATE,
    date_issued: DataTypes.DATE,
    date_paid: DataTypes.DATE,
    invoice_currency: DataTypes.STRING,
    invoice_id: DataTypes.INTEGER,
    invoice_note: DataTypes.TEXT,
    payment_status: DataTypes.STRING,
    produce_desp: DataTypes.TEXT,
    produce_qty: DataTypes.STRING,
    supplier_id: DataTypes.INTEGER
  }, {});
  invoice.associate = function(models) {
    // associations can be defined here

    invoice.hasMany(models.bank, {
      foreignkey: 'bank_id',
      as: 'banks'
    })
    invoice.hasMany(models.buyer, {
      foreignkey: 'buyer_id',
      as: 'buyers'
    })
    invoice.hasMany(models.supplier, {
      foreignkey: 'supplier_id',
      as: 'suppliers'
    })
  };
  return invoice;
};