import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  claimedBy: { type: String, default: null },
  claimedAt: { type: Date, default: null },
});

export default mongoose.model("Coupon", couponSchema);
