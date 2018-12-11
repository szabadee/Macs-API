'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mac = sequelize.define('Mac', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    inch: DataTypes.DECIMAL,
    year: DataTypes.DATE
  }, {});
  Mac.associate = function(models) {
    // associations can be defined here
  };
  return Mac;
};