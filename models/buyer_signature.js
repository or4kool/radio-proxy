'use strict';
module.exports = (sequelize, DataTypes) => {
  var buyer_signature = sequelize.define('buyer_signature', {
    buyer_signature: DataTypes.BLOB,
    buyer_signature_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {});
  buyer_signature.associate = function(models) {
    // associations can be defined here
  };
  return buyer_signature;
};