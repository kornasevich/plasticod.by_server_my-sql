const db = require("../models");
const General = db.general;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {

    const {numberOrder, images, numberPhone} = req.body;
    // Validate request
    if (!numberOrder) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a General
    const general = {
        numberOrder: numberOrder,
        numberPhone: numberPhone
    };

    // Save Tutorial in the database
    General.create(general)
        .then(data => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.update = (req, res) => {
    const {numberPhone} = req.body;

    General.update({
        numberPhone: numberPhone
    }, {where: {id: 1}})
        .then((response) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(response)
        })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const numberOrder = req.query.numberOrder;
    const condition = numberOrder ? {title: {[Op.like]: `%${numberOrder}%`}} : null;

    General.findAll({where: condition})
        .then(data => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};