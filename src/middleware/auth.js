
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        // Looks for provided header
        const authValue = req.headers.authorization;
        const token = authValue.replace('Bearer ', '');
        //Validates user token
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        if (decoded) {
            req.headers.user = decoded.user;
            next()
        }

    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth;
