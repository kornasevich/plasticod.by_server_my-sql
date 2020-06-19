/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const products = require('./routes/api/products');
const groups = require('./routes/api/groups');
const news = require('./routes/api/news');
const user = require('./routes/api/user');
const mail = require('./service/postMail');
const mailer = require('./service/nodemailer');
const general = require('./routes/api/general');
const about = require('./routes/api/about');
const exampleUsing = require('./routes/api/example.routes.js');
const addressHipping = require('./routes/api/address-shipping');
const buyRetail = require('./routes/api/buy-retail');
const contacts = require('./routes/api/contacts');

const app = express();

app.use(bodyParser.json({limit: '40mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '40mb', extended: true}));
app.use(cors());

/!*app.use(express.static(path.join(__dirname, "client/public")))*!/

app.use('/api/products', products);
app.use('/api/groups', groups);
app.use('/api/news', news);
app.use('/api/user', user);
app.use('/api/general', general);
app.use('/api/about', about);
app.use('/api/example.routes.js', exampleUsing);
app.use('/api/address-shipping', addressHipping);
app.use('/api/buy-retail', buyRetail);
app.use('/api/contacts', contacts);

app.use('/service/post-mail', mail);

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`server start on port ${port}`));


*/


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(bodyParser.json({limit: '40mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '40mb', extended: true}));
app.use(express.static("uploads"));
/*app.use(express.static(path.join(__dirname, 'uploads')));*/
app.use(cors());
console.log(__dirname);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./routes/tutorial.routes")(app);
require("./routes/general.routes")(app);
require("./routes/social.routes")(app);
require("./routes/slider.routes")(app);
require("./routes/groups.routes")(app);
require("./routes/product.routes")(app);
require("./routes/about.routes")(app);
require("./routes/example.routes")(app);
require("./routes/news.routes")(app);
require("./routes/address.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});