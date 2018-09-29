'use strict';
module.exports = (sequelize, DataTypes) => {
  var supplier = sequelize.define('supplier', {
    account_number: DataTypes.INTEGER,
    business_address: DataTypes.STRING,
    business_name: DataTypes.STRING,
    business_phone: DataTypes.STRING,
    business_reg_number: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    passwod: DataTypes.STRING,
    supplier_id: DataTypes.INTEGER,
    supplier_name: DataTypes.STRING,
    supplier_signature_id: DataTypes.INTEGER,
    tax_number: DataTypes.STRING
  }, {});
  supplier.associate = function(models) {
    // associations can be defined here

    supplier.hasMany(models.supplier_signature, {
      foreignKey: 'supplier_signature_id',
      as: 'supplier_signatures'
    })
  };
  return supplier;
};