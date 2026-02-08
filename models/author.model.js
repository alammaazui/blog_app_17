const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const AUTHOR =sequelize.define("Author", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = AUTHOR


