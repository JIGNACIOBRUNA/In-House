const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("message", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        chatbotId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        question:{
            type: DataTypes.STRING,
            allowNull: false
        },
        response:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
};

        