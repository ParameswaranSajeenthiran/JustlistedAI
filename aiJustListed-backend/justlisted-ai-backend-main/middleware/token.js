const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");
require('dotenv').config();
module.exports = {
    createToken: (email, userId) => {
        const jsonToken = sign({ email: email, userid: userId }, process.env.JWT_KEY, { expiresIn: process.env.JWT_LIFETIME });
        return jsonToken;
    },
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
       
            token = token.slice(7);
            jwt.verify(token,process.env.JWT_KEY, (err, tokenData) => {

                if (err) {
                    return res.status(401).json({
                        success: false,
                        user: "res",
                        error: "Invalid Token"
                    });
                } else {
                    req.tokenData = tokenData;
                    next();
                }
            });
        } else {
            return res.status(401).json({
                success: false,
                error: "Access Denied! Unauthorized user"
            });
        }
    },
  
 
};