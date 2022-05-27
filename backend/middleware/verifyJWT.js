const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const token = req.get("JWT");
    if(token){
        jwt.verify(token, process.env.JWT_SIGN_KEY, (err, decodedToken) => {
            if(err){
                console.error(err);
                res.json({message: err.message});
            }else{
                console.log(decodedToken);
                next();
            }
        });
    }else{
        res.status(401).json({message: "You are unauthorized, please sign up."});
    }
}


module.exports = verifyJWT;

