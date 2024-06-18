import React from "react";
import "./referral.scss";
import { Link } from "react-router-dom";
import { CopySvg } from "../../../assets/icon";
import facebook from '../../../assets/Referral/Facebook.png'
import email from '../../../assets/Referral/Email.png'
import twitter from '../../../assets/Referral/Twiter.png'
import whatsapp from '../../../assets/Referral/Whatsap.png'
function Referral() {
  return (
    <div className="referral">
      <div className="title">Refer a friend! Give $20, Get 20 Points</div>
      <p>
        Get your referral link to give your friends a $20 discount when they
        shop at Juslisted.ai. If they use it, we’ll reward you with 20 points.
      </p>
      <Link to={"/"}>Terms & Conditions</Link>
      <div className="invite">Invite now using:</div>
      <div className="social-icons">
        <img src={facebook} alt="" />
        <img src={email} alt="" />
        <img src={twitter} alt="" />
        <img src={whatsapp} alt="" />
      </div>
      <div className="copy-link">Or copy your personal link</div>
      <div className="form-copy">
        <div className="input">
          <input type="text" />
          <button>
            <CopySvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Referral;
