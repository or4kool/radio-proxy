'use strict';
module.exports = (sequelize, DataTypes) => {
  var bank_signature = sequelize.define('bank_signature', {
    bank_signature: DataTypes.BLOB,
    bank_signature_id: DataTypes.INTEGER
  }, {});
  bank_signature.associate = function(models) {
    // associations can be defined here
  };
  return bank_signature;
};