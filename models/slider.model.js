const {INTEGER} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("slider", {
        pathImage: {
            type: Sequelize.STRING
        },
        idImage: {
            type: INTEGER
        }
    });
};