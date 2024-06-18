import React from "react";
import { CopySVG } from "../../../../assets/icon";
interface CategoryDropDownProps {
  generated:string
}
const YourOwnWord: React.FC<CategoryDropDownProps> = ({generated}) => {
  return (
    <div className="contant1">
      <div className="copy">
        <CopySVG />
      </div>
      <div className="para">
        {generated}
      </div>
    </div>
  );
};

export default YourOwnWord;
