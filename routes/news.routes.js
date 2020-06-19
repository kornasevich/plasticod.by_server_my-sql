module.exports = app => {
    const news = require("../controllers/news.controller.js");

    const router = require("express").Router();

    router.post("/", news.insert);

    router.post("/update", news.updateNew);

    router.get("/", news.findAll);

    router.delete("/:id", news.delete);

    app.use('/api/news', router);
};