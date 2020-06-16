module.exports = (sequelize, Sequelize) => {
    return sequelize.define("example", {
        image: {
            type: Sequelize.BLOB,
            get() {
                return this.getDataValue('image').toString('utf8');
                /*if (Buffer.isBuffer(this.getDataValue('image'))) {

                    console.log(Buffer.from(this.getDataValue('image')))
                    return this.getDataValue('image').toString('base64');
                } else if( typeof this.getDataValue('image').buffer == 'function' ) {
                    console.log(Buffer.from(this.getDataValue('image')).toString('base64'))
                    return this.getDataValue('image').buffer().toString('base64');
                }*/
            }
        }
    });
};