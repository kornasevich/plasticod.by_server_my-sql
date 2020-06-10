module.exports = app => {
    const social = require("../controllers/social.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", social.create);

    router.put("/update", social.update);

    // Retrieve all Tutorials
    router.get("/", social.findAll);

    app.use('/api/social', router);
};