const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const BLOG = sequelize.define("Blog", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUID
    primaryKey:true,
    unique:true
  },
  title: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(2500),
    allowNull: false,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = BLOG;
