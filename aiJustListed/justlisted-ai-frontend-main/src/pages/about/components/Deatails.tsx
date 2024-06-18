import React from "react";
import "../about.scss";
import DetailsRaw from "./DetailsRaw";
import { ABOUTDROP } from "../../../utils/aboutitem/aboutItem";
function Deatails() {
  return (
    <div className="details">
      <div className="container">
        {ABOUTDROP?.map((item, i) => (
          <DetailsRaw key={i} title={item?.title} summary={item?.summary}/>
        ))}
      </div>
    </div>
  );
}

export default Deatails;
