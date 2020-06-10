const db = require("../models");
const Social = db.social;
const Op = db.Sequelize.Op;
/*const fs =  require('fs');

/!*Download the base64 image in the server and returns the filename and path of image.*!/
function saveImage(baseImage) {
    /!*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*!/
    const uploadPath = __dirname + "/server";
    //path of folder where you want to save the image.
    const localPath = `${uploadPath}/uploads/images/`;
    //Find extension of file
    const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
    //Forming regex to extract base64 data of file.
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    //Extract base64 data.
    const base64Data = baseImage.replace(regex, "");
    const rand = Math.ceil(Math.random()*1000);
    //Random photo name with timeStamp so it will not overide previous images.
    const filename = `Photo_${Date.now()}_${rand}.${ext}`;

    //Check that if directory is present or not.
    if(!fs.existsSync(`${uploadPath}/uploads/`)) {
        fs.mkdirSync(`${uploadPath}/uploads/`);
    }
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath);
    }
    fs.writeFileSync(localPath+filename, base64Data, 'base64');
    return {filename, localPath};
}*/

// Create and Save a new Tutorial
exports.create = (req, res) => {

    const social = {...req.body};

    // Save Tutorial in the database
    Social.create(social)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Social."
            });
        });
};

exports.update = (req, res) => {
    const socials = {...req.body};
    /*    JSON.parse(images).forEach((image)=>{
            console.log(saveImage(image))
        });*/

    Social.update(socials, {where: {id: 1}})
        .then((response) => {
            res.send(response)
        })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

    Social.findAll({where: {id: 1}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};