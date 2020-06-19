const db = require("../models");
const News = db.news;
const fs = require('fs');

exports.insert = (req, res) => {
    const {description} = req.body;
    News.upsert({
        description: description
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Groups."
            });
        });
};

exports.findAll = (req, res) => {
    News.findAll()
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

exports.updateNew = (req, res) => {
    const {description} = req.body;
    News.update(
        {
            description: description
        },
        {where: {id: id}})
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

exports.delete = (req, res) => {
    const {id} = req.params;
    News.destroy({
        where: {id: Number(id)}
    })
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