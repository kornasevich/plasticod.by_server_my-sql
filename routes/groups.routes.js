module.exports = app => {
    const groups = require("../controllers/groups.controller.js");

    const router = require("express").Router();

    router.post("/", groups.insert);

    router.post("/update", groups.updateGroup);

    router.get("/", groups.findAll);

    app.use('/api/groups', router);
};