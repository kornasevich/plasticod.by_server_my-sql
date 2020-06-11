module.exports = app => {
    const slider = require("../controllers/slider.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", slider.create);

    router.put("/update", slider.update);

    // Retrieve all Tutorials
    router.get("/", slider.findAll);

    app.use('/api/slider', router);
};