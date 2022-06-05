const sequelize = require('../database/dbOperations');



const createOrder = async (req, res) => {
    
    let {userID, products, address, total} = req.body;

    try{
        let [result, metadata] = await sequelize.query(`insert into [Order] values (${userID}, '${address}',${total})`);
        [result, metadata] = await sequelize.query(`select TOP 1 ID from [Order] where [Order].UserID = ${userID} order by [Order].ID desc`);
        
        let queryString = `insert into OrderProduct (OrderID, ProductID) values `;
        
        for(let i = 0; i < products.length-1; i++) {
            queryString += `(${result[0].ID}, ${products[i].ID}, ${products[i].Amount}),`
        }
        queryString += `(${result[0].ID}, ${products[products.length - 1].ID}, ${products[products.length - 1].Amount});`;

        [result, metadata] = await sequelize.query(queryString);

        res.status(201).json({message:"Order has been successfully created"}); 
    }catch(err){
        console.error(err);
        res.status(500).json({message: err.message});
    }

}


module.exports = {
    createOrder
}
