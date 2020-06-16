module.exports = app => {
    const about = require("../controllers/about.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", about.create);

    router.post("/update-about", about.update);

    // Retrieve all Tutorials
    router.get("/", about.findAll);

    app.use('/api/about', router);
};