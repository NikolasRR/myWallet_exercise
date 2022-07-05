import authServices from "../services/authServices.js";

async function signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await authServices.getUserByEmail(email);

    await authServices.createUser(name, email, password, user);

    res.sendStatus(201);
}

async function signIn(req, res) {
    const { email, password } = req.body;

    const user = await authServices.getUserByEmail(email);

    const token = await authServices.signUserIn(user);

    res.send(token);
}

export { signUp, signIn }