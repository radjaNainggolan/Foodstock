const sequelize = require('../database/dbOperations');


const getUser = async (req, res) => {
    const id = req.params.id;

    try{
        const [result, metadata] = await sequelize.query('select FirstName, LastName,Email from [User] as u where u.ID ='+id);
        console.log(result);
        res.status(200).json(result);
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
        const [result, metadata] = await sequelize.query('select top 1 o.ID as orderID, o.Address, p.ID as ProductID , p.Name, i.Src , o.Total '+
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

module.exports = {
    getUser,
    getRecentOdersByUserID,
    getLastOrderByUserID

}