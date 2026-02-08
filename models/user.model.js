const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db.config");

const USER = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey:true,
    allowNull:false,
    unique:true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
},
role: {
    
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "guest",
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull:true,
},
// mobile_number:{
    
//     type: DataTypes.STRING,
//     allowNull:true,
//   }
});

module.exports = USER