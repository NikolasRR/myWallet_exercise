import connection from "../database.js";

import bcrypt from "bcrypt";

async function getUserByEmail(email) {
    const existingUser = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );

    return existingUser.rows[0];
}

async function createUser(name, email, password, user) {
    if (user) {
        throw { message: 'conflict' }
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

async function signUserIn(user) {
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw { message: 'login problem' }
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );

    return token;
}

const authServices = {
    getUserByEmail,
    createUser,
    signUserIn
};

export default authServices;