import React from "react";
import storyImage from "../../../assets/about/storyhouse.png";

function Mission() {
  return (
    <div className="mission">
      <div className="container">
        <div className="image">
          <img src={storyImage} alt="" />
        </div>
        <div className="contant">
          <h3>Our Mission</h3>
          <p>
            At JustListed AI, our mission is to empower real estate
            professionals by providing an AI-driven platform that fundamentally
            transforms their approach to connecting with clients and selling
            properties. We strive to bridge the gap between traditional real
            estate practices and the evolving digital landscape. Our platform is
            designed not just to keep pace with the changing market but to set
            new standards in how real estate listings are crafted and presented.
            By integrating cutting-edge AI technology, we aim to enhance the
            efficiency, effectiveness, and appeal of property listings, thereby
            revolutionizing the real estate industry's approach to marketing and
            client engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
