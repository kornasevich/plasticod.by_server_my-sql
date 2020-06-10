module.exports = (sequelize, Sequelize) => {
    return sequelize.define("social", {
        vk: {
            type: Sequelize.STRING
        },
        skype: {
            type: Sequelize.STRING
        },
        viber: {
            type: Sequelize.STRING
        },
        whatsapp: {
            type: Sequelize.STRING
        },
        telegram: {
            type: Sequelize.STRING
        },
        facebook: {
            type: Sequelize.STRING
        },
        instagram: {
            type: Sequelize.STRING
        }
    });
};