'use strict';
module.exports = (sequelize, DataTypes) => {
  var buyer = sequelize.define('buyer', {
    account_number: DataTypes.INTEGER,
    business_address: DataTypes.STRING,
    business_name: DataTypes.STRING,
    business_phone: DataTypes.STRING,
    business_reg_number: DataTypes.STRING,
    buyer_id: DataTypes.INTEGER,
    buyer_signature_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    interest_rate: DataTypes.STRING,
    passwod: DataTypes.STRING,
    penalty_rate: DataTypes.STRING,
    percentage_amount: DataTypes.STRING,
    supplier_id: DataTypes.INTEGER,
    tax_number: DataTypes.STRING
  }, {});
  buyer.associate = function(models) {
    // associations can be defined here

    buyer.hasMany(models.bank_signature, {
      foreignKey: 'bank_signature_id',
      as: 'bank_signatures'
    })
    buyer.hasMany(models.supplier, {
      foreignKey: 'supplier_id',
      as: 'suppliers'
    })
  };
  return buyer;
};