import React from "react";

function WhyChooseCard({ title, contant }: any) {
  return (
    <div className="whychoose-card">
      <div className="title">{title}</div>
      <p>{contant}</p>
    </div>
  );
}

export default WhyChooseCard;
