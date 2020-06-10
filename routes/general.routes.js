module.exports = app => {
    const general = require("../controllers/general.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", general.create);

    router.put("/update", general.update);

    // Retrieve all Tutorials
    router.get("/", general.findAll);

    app.use('/api/general', router);
};