module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        nameCompany: {
            type: Sequelize.STRING
        },
        legalAddress: {
            type: Sequelize.STRING
        },
        postAddress: {
            type: Sequelize.STRING
        },
        postCode: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        unp: {
            type: Sequelize.STRING
        },
        whoIssued: {
            type: Sequelize.STRING
        },
        paymentAccount: {
            type: Sequelize.STRING
        },
        nameBank: {
            type: Sequelize.STRING
        },
        codeBank: {
            type: Sequelize.STRING
        },
        addressBank: {
            type: Sequelize.STRING
        },
        fullName: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        street: {
            type: Sequelize.STRING
        },
        home: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        },
        apartment: {
            type: Sequelize.STRING
        },
        comment: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    });
};