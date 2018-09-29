'use strict';
module.exports = (sequelize, DataTypes) => {
  var supplier_signature = sequelize.define('supplier_signature', {
    supplier_signature: DataTypes.BLOB,
    supplier_signature_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {});
  supplier_signature.associate = function(models) {
    // associations can be defined here
  };
  return supplier_signature;
};