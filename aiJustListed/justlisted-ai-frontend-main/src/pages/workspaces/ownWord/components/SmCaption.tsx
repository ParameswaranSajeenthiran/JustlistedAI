import React from "react";
import { CopySVG } from "../../../../assets/icon";
interface CategoryDropDownProps {
  caption: string;
}

const SmCaption: React.FC<CategoryDropDownProps> = ({ caption }) => {
  return (
    <div className="contant">
      <div className="header">
        Here your own social media caption <CopySVG />
      </div>
      <div className="para">{caption} </div>
    </div>
  );
};

export default SmCaption;
