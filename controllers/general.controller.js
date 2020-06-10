const db = require("../models");
const General = db.general;
const Op = db.Sequelize.Op;
const fs = require('fs');

function saveImage(baseImage) {
    const uploadPath = "./";
    const localPath = `${uploadPath}uploads/images/slider`;
    const ext = baseImage.substring(baseImage.indexOf("/") + 1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    const base64Data = baseImage.replace(regex, "");
    const rand = Math.ceil(Math.random() * 1000);
    const filename = `Photo_${Date.now()}_${rand}.${ext}`;
    if (!fs.existsSync(`${uploadPath}/uploads/`)) {
        fs.mkdirSync(`${uploadPath}/uploads/`);
    }
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath);
    }
    fs.writeFileSync(localPath + filename, base64Data, 'base64');
    return {filename, localPath};
}

// Create and Save a new Tutorial
exports.create = (req, res) => {

    const {numberOrder, images, numberPhone} = req.body;
    // Validate request
    if (!numberOrder) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a General
    const general = {
        numberOrder: numberOrder,
        images: images,
        numberPhone: numberPhone
    };

    // Save Tutorial in the database
    General.create(general)
        .then(data => {
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
    const {numberOrder, images, numberPhone} = req.body;
    saveImage(images)

    General.update({
        numberOrder: numberOrder,
        images: saveImage(images).localPath,
        numberPhone: numberPhone
    }, {where: {id: 1}})
        .then((response) => {
            res.send(response)
        })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const numberOrder = req.query.numberOrder;
    const condition = numberOrder ? {title: {[Op.like]: `%${numberOrder}%`}} : null;

    General.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};