const express = require('express');
const dbOperations = require('./database/dbOperations');
const sequelize = require('./database/dbOperations');
const productRoutes = require('./Routes/productRoutes');
const logInAndSignUpRoutes = require('./Routes/signUpAndLogInRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const cookieParser = require('cookie-Parser');
const categoryRoutes = require('./Routes/categoryRoutes');
const subCategoryController = require('./Routes/subCategoryRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000"
}));
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

app.use(logInAndSignUpRoutes);
app.use(orderRoutes);
app.use(categoryRoutes);
app.use(subCategoryController);







