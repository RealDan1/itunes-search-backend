const jwt = require('jsonwebtoken');

function jwtMiddleware(req, res, next) {
    // 1. Get the token from the request headers
    const jwtToken = req.headers['authorization'];

    if (jwtToken) {
        //if the token exists, it means its not the first request - verify the token
        req.isFirstRequest = false;
        // 2. Split the token from the Bearer
        const tokenExtract = jwtToken.split(' ')[1];
        try {
            // 3. Verify the token using the secret key
            const payload = jwt.verify(tokenExtract, process.env.JWT_SECRET);
            // 4. Attach the payload to the request object
            req.payload = payload;
            // 5. Proceed to the protected route
            next();
        } catch (error) {
            // 6. If token verification fails, return a forbidden response
            res.status(401).json({ message: 'Invalid token - or token expired' });
            console.log('Invalid token - or token expired');
        }
    } else {
        //if the token doesnt exist, it means its the first request - set the boolean to true and attach it to the req object, then allow the request through - the backend will generate a token and send it back for subsequent requests.
        req.isFirstRequest = true;
        next();
    }
}

module.exports = { jwtMiddleware };
