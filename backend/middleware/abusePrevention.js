import Claim from "../models/Claim.js";

const abusePrevention = async (req, res, next) => {
  const ip = req.ip;
  const lastClaim = await Claim.findOne({ ip }).sort({ claimedAt: -1 });

  if (lastClaim && Date.now() - lastClaim.claimedAt < 3600000) {
    return res.status(429).json({
      message: `You can claim another coupon in ${Math.ceil(
        (3600000 - (Date.now() - lastClaim.claimedAt)) / 60000
      )} minutes`,
    });
  }

  next();
};

export default abusePrevention;
