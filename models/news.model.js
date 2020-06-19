module.exports = (sequelize, Sequelize) => {
    return sequelize.define("news", {
        description: {
            type: Sequelize.STRING
        }
    });
};