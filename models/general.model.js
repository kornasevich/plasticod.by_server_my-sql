module.exports = (sequelize, Sequelize) => {
    return sequelize.define("general", {
        numberOrder: {
            type: Sequelize.STRING
        },
        images: {
            type: Sequelize.BLOB('long')
        },
        numberPhone: {
            type: Sequelize.STRING
        }
    });
};