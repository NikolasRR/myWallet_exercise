import express from "express";

const financialEventsRouter = express.Router();

financialEventsRouter.post('/financial-events');
financialEventsRouter.get('/financial-events');
financialEventsRouter.get('/financial-events/sum');

export default financialEventsRouter;