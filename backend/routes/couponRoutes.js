import express from "express";
import { getCoupon } from "../controllers/couponController.js"; // Named import
import abusePrevention from "../middleware/abusePrevention.js";

const router = express.Router();

// Use the imported `getCoupon` function directly
router.get("/", abusePrevention, getCoupon);

export default router;
