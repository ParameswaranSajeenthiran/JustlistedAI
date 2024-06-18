import React from "react";
import { CopySVG } from "../../../../assets/icon";

interface CategoryDropDownProps {
  contant: string;
}
const Regenerated: React.FC<CategoryDropDownProps> = ({ contant }) => {
  return (
    <div className="contant1">
      <div className="header">
        Regenerated <CopySVG />
      </div>
      <div className="para">{contant} </div>
    </div>
  );
};

export default Regenerated;
