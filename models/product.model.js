module.exports = (sequelize, Sequelize) => {
    return sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },
        group: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        drawer: {
            type: Sequelize.STRING
        },
        volumeOneBox: {
            type: Sequelize.STRING
        },
        volumeAllBox: {
            type: Sequelize.STRING
        },
        codeCompatibility: {
            type: Sequelize.STRING
        },
        priceBeforeTen: {
            type: Sequelize.STRING
        },
        priceBeforeHundred: {
            type: Sequelize.STRING
        },
        priceAfterHundred: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.STRING
        }
    });
};