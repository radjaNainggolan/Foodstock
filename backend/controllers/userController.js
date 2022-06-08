const sequelize = require('../database/dbOperations');


const getUser = async (req, res) => {
    const id = req.params.id;

    try{
        const [result, metadata] = await sequelize.query('select FirstName, LastName,Email from [User] as u where u.ID ='+id);
        console.log(result);
        if(result.length > 0){

            res.status(200).json(result);
        }else{
            res.status(400).json({message:"User with this id does not exist."});
        }
    }catch(err){
        console.error(err);
    }
}

const getRecentOdersByUserID = async (req, res) => {
    const id = req.params.id;

    try{
        const [result, metadata] = await sequelize.query('select top 3 o.ID as orderID, o.Address, p.ID as ProductID , p.Name, i.Src , o.Total '+
        'from '+
        '[User] as u '+
        'inner join '+
        '[Order] as o '+
        'on u.ID = o.UserID '+
        'inner join '+
        'OrderProduct as op '+
        'on op.OrderID = o.ID '+
        'inner join '+
        'Product as p '+
        'on p.ID = op.ProductID '+
        'inner join '+
        '[Image] as i '+
        'on i.ProductID = p.ID '+
        'where u.ID = '+id+
        ' order by o.ID desc');
        console.log(result);
        res.status(200).json(result);
    }catch(err){
        console.error(err);
    }
}

const getLastOrderByUserID = async (req, res) => {
    const id = req.params.id;

    try{
        const [result, metadata] = await sequelize.query('select o.ID as OrderID, p.ID, o.Address, o.Total, op.Amount, p.Name, p.Description, p.Price, p.Energy, p.Fats, p.SaturatedFats, p.Protein, p.Carbonhydrates, p.Sugar, p.Fibers,p.Salt, p.Storage, p.MadeIn, p.Producer, p.Import, p.Ingredients, p.ExpireDate, p.Alergens, p.Alcohol, p.AdditionalInfo, i.Src '+ 
        'from '+
            '[Order] as o '+
            'inner join '+
            'OrderProduct as op '+
            'on o.ID = op.OrderID '+
            'inner join '+
            'Product as p '+
            'on p.ID = op.ProductID '+
            'inner join '+
            'Image as i '+
            'on i.ProductID = p.ID '+
            'where o.ID = ( '+
                'select max(o.ID) '+
                'from '+
                    '[Order] as o '+
                'where o.UserID = '+id+
            ' )');
        console.log(result);
        res.status(200).json(result);
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getUser,
    getRecentOdersByUserID,
    getLastOrderByUserID

}