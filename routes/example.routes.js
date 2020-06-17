module.exports = app => {
    const example = require("../controllers/example.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", example.create);

    router.delete("/", example.delete);

    // Retrieve all Tutorials
    router.get("/", example.findAll);

    app.use('/api/example', router);
};








