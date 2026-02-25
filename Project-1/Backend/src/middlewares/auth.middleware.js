const jwt = require('jsonwebtoken');

async function indentifyUser(req, res, next) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ message: "Unauthorized access!! Please login first" });
    }
    let decodedToken = null;
    try{
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({ message: "Invalid token!! Please login again" });
    }
    req.user = decodedToken;
    next();
}

module.exports = { indentifyUser };