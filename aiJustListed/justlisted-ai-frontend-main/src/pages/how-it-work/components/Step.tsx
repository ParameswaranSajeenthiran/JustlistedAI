import React from "react";
import house from "../../../assets/about/storyhouse.png";
function Step() {
  return (
    <div className="stepper">
      <div className="left">
        <h5>Sign Up</h5>
        <p>
          Begin your journey with JustListed AI by signing up on our platform.
          It's a simple process that opens the door to a world of innovative
          listing creation. Once registered, you'll gain access to all the tools
          and features that make JustListed AI a game-changer in real estate
          listings.
        </p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="center">
        <h3>STEP</h3>
        <div className="number">1</div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="right">
        <img src={house} alt="" />
      </div>
    </div>
  );
}

export default Step;
