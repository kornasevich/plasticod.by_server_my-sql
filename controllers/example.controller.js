const db = require("../models");
const example = db.example;
const Op = db.Sequelize.Op;
const fs = require('fs');


function saveImage(baseImage) {
    const uploadPath = "./";
    const localPath = `${uploadPath}uploads\/images\/example\/`;
    const ext = baseImage.substring(baseImage.indexOf("\/") + 1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length, baseImage.indexOf("\/"));
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    const base64Data = baseImage.replace(regex, "");
    const rand = Math.ceil(Math.random() * 1000);
    const filename = `Photo_${Date.now()}_${rand}.${ext}`;
    if (!fs.existsSync(`${uploadPath}\/uploads\/`)) {
        fs.mkdirSync(`${uploadPath}\/uploads\/`);
    }
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath);
    }
    fs.writeFileSync(localPath + filename, base64Data, 'base64');
    return {image: `${__dirname.split('controllers')[0]}${localPath.split('./')[1]}${filename}`};
}


exports.create = (req, res) => {
    const {image} = req.body;
    example.upsert(saveImage(image))
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

exports.delete = (req, res) => {
    const {id} = req.body;

    example.destroy({where: {id: id}})
        .then((response) => {
            res.send(response)
        })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    example.findAll()
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