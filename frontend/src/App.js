import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import couponLogo from "../src/assets/logo/coupon.png";

function App() {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClaimCoupon = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/coupons");
      setCoupon(response.data.coupon);
      setMessage("Coupon claimed successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error claiming coupon");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="coupon-card">
        <div className="header">
          <img src={couponLogo} alt="coupon" className="coupon-logo" />
          <h1>Coupon Distribution</h1>
        </div>
        <p>Click the button below to claim your coupon!</p>
        <button
          onClick={handleClaimCoupon}
          disabled={isLoading}
          className="claim-button"
        >
          {isLoading ? "Claiming..." : "Claim Coupon"}
        </button>
        {coupon && (
          <div className="coupon-display">
            <p>Your Coupon Code Is :</p>
            <h2>{coupon}</h2>
          </div>
        )}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
