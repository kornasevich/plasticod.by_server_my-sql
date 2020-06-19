module.exports = (sequelize, Sequelize) => {
    return sequelize.define("address", {
        address: {
            type: Sequelize.STRING
        }
    });
};