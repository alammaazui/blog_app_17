const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const COMMENT = sequelize.define('Comment',{
    id:{
        primaryKey:true,
        unique:true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false

    }
})

module.exports = COMMENT