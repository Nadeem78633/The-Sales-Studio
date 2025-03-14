import Coupon from "../models/Coupon.js";
import Claim from "../models/Claim.js";

export const getCoupon = async (req, res) => {
  try {
    const availableCoupon = await Coupon.findOne({ claimedBy: null });
    if (!availableCoupon) {
      return res.status(404).json({ message: "No coupons available" });
    }

    availableCoupon.claimedBy = req.ip;
    availableCoupon.claimedAt = Date.now();
    await availableCoupon.save();

    // Record the claim
    await Claim.create({ ip: req.ip });

    res.json({ coupon: availableCoupon.code });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
