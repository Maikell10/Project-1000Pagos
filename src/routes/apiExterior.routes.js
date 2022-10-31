import { Router } from "express";

import { getToken } from "../controllers/apiExterior.controller";

const router = Router();

router.post("/token", getToken);

export default router;
