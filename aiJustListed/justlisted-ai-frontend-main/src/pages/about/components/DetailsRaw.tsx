import React, { useState } from "react";
import { DropArrowSvg, DropedArrowSvg } from "../../../assets/icon";

function DetailsRaw({ title, summary }: any) {
  const [open, setopen] = useState(false);

  return (
    <div className="detail-raw">
      <div
        className={open ? "summary" : "summary-active"}
        onClick={() => setopen(!open)}
      >
        {title}
        {open ? (
          <div className="opened">
            <DropedArrowSvg />
          </div>
        ) : (
          <div className="closed">
            <DropArrowSvg />
          </div>
        )}
      </div>
      {open && <p>{summary}</p>}
    </div>
  );
}

export default DetailsRaw;
