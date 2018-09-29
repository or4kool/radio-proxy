'use strict';
module.exports = (sequelize, DataTypes) => {
  var bank = sequelize.define('bank', {
    bank_address: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    bank_license_number: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    bank_phone: DataTypes.STRING,
    bank_signature_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    passwod: DataTypes.STRING,
    tax_number: DataTypes.STRING
  }, {});
  bank.associate = function(models) {
    // associations can be defined here
    console.log("Yo")
    bank.hasMany(models.bank_signature, {
      foreignKey: 'bank_signature_id',
      as: 'bank_signatures'
    })
    bank.hasMany(models.buyer, {
      foreignKey: 'buyer_id',
      as: 'buyers'
    })

  };
  return bank;
};