import React from "react";
import storyImage from "../../../assets/about/storyhouse.png";
function OurStory() {
  return (
    <div className="ourstory">
      <div className="container">
        <div className="title">
          <div className="main-title">
            Empowering Real Estate Professionals with
          </div>
          <div className="sub-titile">Cutting-Edge AI Technology</div>
        </div>
        <div className="story">
          <div className="contant">
            <h4>Our Story</h4>
            <p>
              JustListed AI emerged from a simple yet powerful vision: to
              revolutionize the real estate listing process, making it more
              efficient, effective, and accessible for professionals across the
              industry. Our journey began with a group of seasoned real estate
              experts and tech innovators who shared a common frustration – the
              traditional process of creating property listings was
              time-consuming, often tedious, and lacked the innovation that the
              digital age could offer. Determined to change this, we embarked on
              a mission to harness the potential of artificial intelligence in
              transforming how real estate listings are crafted.
            </p>
          </div>
          <div className="image">
          <img src={storyImage} alt="" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
