async function tokenValidation(next, req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(401);
    }
    
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
        throw { message: 'token not valid' }
    }
    res.locals.user = user;
}