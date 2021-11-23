const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email_show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    birthday_show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country_show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wallet: {
      type: DataTypes.STRING(130),
      allowNull: true,
      //unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    { timestamps: false }
  );
};
