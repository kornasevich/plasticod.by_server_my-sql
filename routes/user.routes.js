module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/registration", user.create);

    app.use('/api/user', router);
};