import { Router } from "express";

import {
    getUsuarioById,
    getUsuarios,
    getLogin,
} from "../../controllers/sqlControllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);

router.get("/usuarios/:id", getUsuarioById);

router.get("/login/:usuario/:clave", getLogin);

export default router;
