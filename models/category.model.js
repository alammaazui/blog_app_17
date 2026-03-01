const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const CATEGORY = sequelize.define("Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUID
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
});

module.exports = CATEGORY;
