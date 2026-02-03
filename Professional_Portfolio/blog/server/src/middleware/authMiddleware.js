import jsonwebtoken from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    // 1. Get the token from the header (format: "Bearer <token>")
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Access Denied. How dare you tried it!!!???"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        // 2. Verify the token using the secret key from .env
        const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        // 3. Attach the user data to the request so controllers can use it
        req.user = verified;

        // 4. Move to the next function (The Controller)
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or Expired Token. Step away from the terminal!"
        });
    }
};
