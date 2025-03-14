// backend/seedCoupons.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Coupon from "./models/Coupon.js";

dotenv.config();

// Generate 100 unique coupon codes
const generateCoupons = () => {
  const coupons = [];
  for (let i = 1; i <= 100; i++) {
    coupons.push({ code: `COUPON${i}` });
  }
  return coupons;
};

const coupons = generateCoupons();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    // Clear existing coupons
    await Coupon.deleteMany({});
    console.log("Cleared existing coupons");

    // Add new coupons
    await Coupon.insertMany(coupons);
    console.log("Added new coupons");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
