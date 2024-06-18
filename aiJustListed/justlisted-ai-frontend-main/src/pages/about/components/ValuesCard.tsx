import React from "react";

function ValuesCard({ title, contant }: any) {
  return (
    <div className="values-card">
      <div className="title">{title}</div>
      <p>{contant}</p>
    </div>
  );
}

export default ValuesCard;
