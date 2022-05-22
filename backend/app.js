const express = require('express');
const dbOperations = require('./database/dbOperations');
const sequelize = require('./database/dbOperations');
const productRoutes = require('./Routes/productRoutes');

const app = express();


app.listen(4000, () => {
    console.log("API is listening on port 4000");
});

sequelize.authenticate()
.then(() => {
    console.log("Connection has been established successfully.");
})
.catch(err => {
    console.error('Unable to connect to the database:', error);
});


app.use('/products', productRoutes);







