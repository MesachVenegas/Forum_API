const jwt = require('jsonwebtoken');

const reqAuth = (req, res, next) => {
    try {
        // * recuperar el valor del token
        const token = req.headers["access-token"];
        if (!token) {
            return res.status(401).json({
                error: 'unauthorized access',
                errorMessage: 'Required access token'
            })
        }
        const decodedToken = jwt.verify(token, "thisIsKeyWord", {
            algorithms: 'HS512'
        })
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = reqAuth;