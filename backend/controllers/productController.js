const sequelize = require('./../database/dbOperations');
const {QueryTypes} = require('sequelize');

queryType = { type: QueryTypes.SELECT }

const getAllProducts = async (req, res) => {
    const result = await sequelize.query('select * '+
    'from '+
        'Product as p '+
        'inner join '+ 
        'Category as c '+
        'on p.CategoryID = c.ID '+
        'inner join '+ 
        'SubCategory as sc '+
        'on sc.ID = p.SubCategoryID '+
        'inner join '+
        'Image as i '+
        'on i.ProductID = p.ID');
    
    res.send(result);
    
};

const getProductByID = async (req, res) => {
    let id = req.params.id;
    let ID = id.toString();
    const result = await sequelize.query('select * '+
    'from '+
        'Product as p '+
        'inner join '+ 
        'Category as c '+
        'on p.CategoryID = c.ID '+
        'inner join '+ 
        'SubCategory as sc '+
        'on sc.ID = p.SubCategoryID '+
        'inner join '+
        'Image as i '+
        'on i.ProductID = p.ID '+
        'where p.ID = '+ID);
    res.send(result);
}

const getCategoryProducts = async (req, res) => {
    
}

module.exports = {
    getAllProducts,
    getProductByID
}