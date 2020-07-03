const db = require("../models");
const Groups = db.groups;
const fs = require('fs');

exports.insert = (req, res) => {
    const {name, description} = req.body.group;
    Groups.upsert({
        name: name,
        description: description
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
                    err.message || "Some error occurred while creating the Groups."
            });
        });
};

exports.findAll = (req, res) => {
    Groups.findAll()
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

exports.updateGroup = (req, res) => {
    const {name, description, id} = req.body.group;
    Groups.update(
        {
            name: name,
            description: description
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