module.exports = (sequelize, Sequelize) => {
    return sequelize.define("example", {
        image: {
            type: Sequelize.STRING,
        }
    });
};