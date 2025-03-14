import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  claimedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Claim", claimSchema);
