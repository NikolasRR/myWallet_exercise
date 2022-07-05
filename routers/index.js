import express from "express";

import authRouter from "./authRouter.js";
import financialEventsRouter from "./financialEventsRouter.js";

const router = express.Router();

router.use(authRouter);
router.use(financialEventsRouter);

export default router;