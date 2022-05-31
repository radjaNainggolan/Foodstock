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

const getUserWithOrders = async (req, res) => {
    const id = req.params.id;

    try{
        const [result, metadata] = await sequelize.query('select * from [User] as u inner join [Order] as o on u.ID = o.UserID inner join OrderProduct as op on o.ID = op.OrderID where u.ID ='+id);
        console.log(result);
        res.status(200).json(result);
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getUser,
    getUserWithOrders

}