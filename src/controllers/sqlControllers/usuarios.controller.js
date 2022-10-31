import { getConnection, sql, queries } from "../../database";

import moment from "moment";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsuarios);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getUsuarioById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", id)
            .query(queries.getUsuarioById);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getLogin = async (req, res) => {
    const { usuario, clave } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("usuario", usuario)
            .query(queries.getUsuarioByUser);

        if (result.recordset[0] === undefined) {
            res.status(500).send("No existe el usuario");
            return;
        }

        const result1 = await pool
            .request()
            .input("usuario", usuario)
            .input("contrasena", clave)
            .query(queries.getUsuarioByUserPass);

        if (result1.recordset[0] === undefined) {
            res.status(500).send("Contraseña incorrecta");
            return;
        }

        res.status(200).send(result1.recordset[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error de Conexión");
    }
};
