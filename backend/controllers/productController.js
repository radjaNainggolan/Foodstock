const sequelize = require('./../database/dbOperations');


const getAllProducts = async (req, res) => {
    
    try{

        const [result, metadata] = await sequelize.query('select p.ID, p.CategoryID, p.Name, p.Description, p.Price, p.Energy, p.Fats, p.SaturatedFats, p.Protein, p.Carbonhydrates, p.Sugar, p.Fibers, p.Salt, p.Storage, p.MadeIn, p.Producer, p.Import, p.Ingredients, p.ExpireDate, p.Alergens, p.Alcohol, p.AdditionalInfo, c.CategoryName, i.Src '+
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
        
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some internal server error has occured.");
    }
    
}

const getProductByID = async (req, res) => {
    let id = req.params.id;
    let ID = id.toString();
    
    try{

        const [result, metadata] = await sequelize.query('select p.ID, p.CategoryID, p.Name, p.Description, p.Price, p.Energy, p.Fats, p.SaturatedFats, p.Protein, p.Carbonhydrates, p.Sugar, p.Fibers, p.Salt, p.Storage, p.MadeIn, p.Producer, p.Import, p.Ingredients, p.ExpireDate, p.Alergens, p.Alcohol, p.AdditionalInfo, c.CategoryName, i.Src '+
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
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send("Some internal server error has occured.");
    }
    
}

const getProductsByCategory = async (req, res) => {
    let id = req.params.id;
    const ID = id.toString();

    try{

        const [result, metadata] = await sequelize.query('select * '+
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
            'where p.CategoryID = '+ID);
        
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(500).send("Some internal server error has occured.");
    }

}

const getProductsBySubCategory = async (req, res) => {
    let id = req.params.id;
    const ID = id.toString();
    
    try {

        const [result, metadata] = await sequelize.query('select * '+
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
            'where p.SubCategoryID = '+ID);
        
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(500).send("Some internal server error has occured.");
    }
}

module.exports = {
    getAllProducts,
    getProductByID,
    getProductsByCategory,
    getProductsBySubCategory
}