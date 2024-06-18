import React from 'react'
import happy from "../../../../assets/workspace/happy.png";

interface CategoryDropDownProps {}

const HappyMsg: React.FC<CategoryDropDownProps> = () => {
  return (
    <div className="happy">
    <span>Are you happy with this?</span>
    <img src={happy} alt="" />
  </div>
  )
}

export default HappyMsg
