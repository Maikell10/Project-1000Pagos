const jwt = require("jsonwebtoken");

// validation
const Joi = require("@hapi/joi");
// constraseña
const bcrypt = require("bcrypt");

// Validation
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    //email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().max(1024).required(),
});

export const getToken = async (req, res) => {
    // validate user
    const { error } = schemaRegister.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const validPassword = await bcrypt.compare(
        req.body.password,
        "$2b$10$6JkJd5MBSbRNqL/JvBv9reGmJrgwUlSVx3XZM4rzgkGC7F/YRRNUm"
    );
    if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });

    // create token
    // sign with RSA SHA256

    try {
        const token = jwt.sign(
            {
                exp: 60,
                iss: "12",
            },
            process.env.TOKEN_SECRET,
            {
                //algorithm: "HS256",
                header: {
                    typ: "JWT",
                    alg: "HS256",
                },
            }
        );

        var decoded = jwt.decode(token, "payara");

        res.header("auth-token", token).json({
            error: null,
            data: { token, decoded },
        });
    } catch (error) {
        res.json({ error: error });
    }
};
