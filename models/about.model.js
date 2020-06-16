module.exports = (sequelize, Sequelize) => {
    return sequelize.define("about", {
        text: {
            type: Sequelize.STRING
        }
    });
};