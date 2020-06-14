module.exports = app => {
    const groups = require("../controllers/product.controller.js");

    const router = require("express").Router();

    router.post("/", groups.insert);

    router.post("/update", groups.updateProduct);

    router.get("/", groups.findAll);

    app.use('/api/product', router);
};