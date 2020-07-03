const db = require("../models");
const Product = db.product;
const fs = require('fs');

exports.insert = (req, res) => {
    const {name, group, code, color, drawer, volumeOneBox, volumeAllBox, codeCompatibility, priceBeforeTen, priceBeforeHundred, priceAfterHundred, weight} = req.body.product;
    Product.upsert({
        name: name,
        group: group,
        code: code,
        color: color,
        drawer: drawer,
        volumeOneBox: volumeOneBox,
        volumeAllBox: volumeAllBox,
        codeCompatibility: codeCompatibility,
        priceBeforeTen: priceBeforeTen,
        priceBeforeHundred: priceBeforeHundred,
        priceAfterHundred: priceAfterHundred,
        weight: weight
    })
        .then(data => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
};

exports.findAll = (req, res) => {
    Product.findAll()
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

exports.updateProduct = (req, res) => {
    const {name, group, code, color, drawer, volumeOneBox, volumeAllBox, codeCompatibility, priceBeforeTen, priceBeforeHundred, priceAfterHundred, id, weight} = req.body.product;
    Product.update({
            name: name,
            group: group,
            code: code,
            color: color,
            drawer: drawer,
            volumeOneBox: volumeOneBox,
            volumeAllBox: volumeAllBox,
            codeCompatibility: codeCompatibility,
            priceBeforeTen: priceBeforeTen,
            priceBeforeHundred: priceBeforeHundred,
            priceAfterHundred: priceAfterHundred,
            weight: weight
        },
        {where: {id: id}})
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