const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.general = require("./general.model.js")(sequelize, Sequelize);
db.social = require("./social.model.js")(sequelize, Sequelize);
db.slider = require("./slider.model.js")(sequelize, Sequelize);
db.groups = require("./groups.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);
db.about = require("./about.model.js")(sequelize, Sequelize);
db.example = require("./example.model.js")(sequelize, Sequelize);
db.news = require("./news.model.js")(sequelize, Sequelize);
db.address = require("./address.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;