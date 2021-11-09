const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Contract', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    wallet1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wallet2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conditions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
