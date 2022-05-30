const sequelize = require('../database/dbOperations');


const getSubCategories = async (req, res) => {
    try{
        let [result, metadata] = await sequelize.query('select * from SubCategory');
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}


const getSubCategoryByID = async (req, res) => {
    let id = req.params.id;
    try{
        let [result, metadata] = await sequelize.query('select * from SubCategory where SubCategory.ID = '+id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getSubCategories,
    getSubCategoryByID
}