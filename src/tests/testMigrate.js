const sequelize = require('../utils/connection');
require('../models/Product');
require('../models/City');

const main = async() => {
    try{
        await sequelize.sync({ force: true });
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();