const {verify} = require("jsonwebtoken");
const {User} = require("../models");

const auth = async (req, res, next) => {
    
    try {
        const { authorization } = req.headers;
        if(!authorization) throw new UnauthenticatedError("Please login first");

        const [type, token] = authorization.split(" ");  
        const decoded = verify(token, 'secret'); 
        const user = await User.findOne({where: {email: decoded.email}}); 
        
        if(!user) throw new Error("User is not registered");
        req.user = user;
    } catch (error) {
        next(error);
    }
    next();
};

module.exports = auth;