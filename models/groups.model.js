module.exports = (sequelize, Sequelize) => {
    return sequelize.define("groups", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });
};