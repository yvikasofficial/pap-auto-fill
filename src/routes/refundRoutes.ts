import express from "express";
import { southwestAirlines } from "../controllers/refundControllers";

const router = express.Router();

router.post("/southwest", southwestAirlines);

export default router;
