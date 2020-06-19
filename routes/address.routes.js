module.exports = app => {
    const address = require("../controllers/address.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", address.create);

    router.post("/update-address", address.update);

    // Retrieve all Tutorials
    router.get("/", address.findAll);

    router.delete("/:id", address.delete);

    app.use('/api/address-shipping', router);
};