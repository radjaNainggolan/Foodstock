const sequelize = require('../database/dbOperations');


const getCategories = async (req, res) => {
    try{
        let [result, metadata] = await sequelize.query('select * from Category');
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}


const getCategoryByID = async (req, res) => {
    let id = req.params.id;
    try{
        let [result, metadata] = await sequelize.query('select * from Category where Category.ID = '+id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getCategories,
    getCategoryByID
}