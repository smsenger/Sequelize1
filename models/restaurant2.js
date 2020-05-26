'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurant2 = sequelize.define('restaurant2', {
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  restaurant2.associate = function(models) {
    // associations can be defined here
  };
  return restaurant2;
};