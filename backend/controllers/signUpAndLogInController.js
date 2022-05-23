const sequelize = require('../database/dbOperations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const maxAge = 60 * 60 * 24 * 3;
require('dotenv').config();


const createToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SIGN_KEY, { expiresIn: maxAge });
}


const logIn = (req, res) => {
    //console.log(process.env.JWT_SIGN_KEY);
}

const signUp = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    // let hashPassword;

    try {
        // const salt = await bcrypt.genSalt();
        // hashPassword = await bcrypt.hash(password, salt);
        [result, metadata] = await sequelize.query('select * from [User] as u where u.Email = ' + "'" + email + "'");

        if(result[0].Email == email) {
            res.status(409).json({ message:"User already exsists."});
        }

        let [result, metadata] = await sequelize.query(`insert into [User] values ('${firstName}','${lastName}','${email}','${hashPassword}')`);
        res.status(201).json({message:"You have successfully signed up."});
        // let ID = result[0].ID;
        // let Email = result[0].Email;
        // const token = createToken(result[0].ID, result[0].Email);

        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        // res.status(201).json({ ID: });
    } catch (err) {
        console.error(err);
        res.status(500).send("Some internal server error has occured.");
    }

}

module.exports = {
    logIn,
    signUp
}