const sequelize = require('../database/dbOperations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const maxAge = 60 * 60 * 24 * 3;
require('dotenv').config();
const salt = bcrypt.genSaltSync();

const createToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SIGN_KEY, { expiresIn: maxAge });
}


const logIn = async (req, res) => {
    const {email , password} = req.body;
    
    try{
        let [result, metadata] = await sequelize.query('select * from [User] as u where u.Email = ' + "'" + email + "'")
        
        if(result.length > 0){
            const auth = await bcrypt.compare(password, result[0].Password);
            
            if(auth){
                const token = createToken(result[0].ID, result[0].Email);
                
                return res.status(200).json({
                    id:result[0].ID,
                    message:"You have successfully loged in!",
                    token: token
                });
            
            }else{
                return res.status(400).json({message: "Wrong password."});
            }
        }else{
            return res.status(400).json({message:"User with this email does not exists."});
        }
    }catch(err){
        console.error(err);
        // return res.status(500).json({message:err.message});
    }

    

}

const signUp = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;
    
    try {
        let [result, metadata] = await sequelize.query('select * from [User] as u where u.Email = ' + "'" + email + "'");
        //console.log(result);
        
        if(result.length > 0 && result[0].Email == email) {
            return res.status(409).json({ message:"User already exsists."});
        }
        
        let hashPassword = await bcrypt.hash(password, salt);
        
        [result, metadata] = await sequelize.query(`insert into [User] values ('${firstName}','${lastName}','${email}','${hashPassword}')`);
        
        [result, metadata] = await sequelize.query('select * from [User] as u where u.Email = ' + "'" + email + "'");
        
        const token = createToken(result[0].ID, result[0].Email);
        
        return res.status(201).json({
            id:result[0].ID,
            message:"You have successfully signed up!",
            token: token
        });
    
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            messge:err.message
        });
    }

}

module.exports = {
    logIn,
    signUp
}