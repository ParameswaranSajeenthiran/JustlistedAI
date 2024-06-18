import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WorkSpaceList({ item,setopenPop,openPop }: any) {
  const navigate = useNavigate()
  const targetDate = new Date(item?.updatedAt).getTime();
  const [timeAgo, setTimeAgo] = useState<string>(calculateTimeAgo(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeAgo = calculateTimeAgo(targetDate);
      setTimeAgo(newTimeAgo);
    }, 60000); 
    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  function calculateTimeAgo(targetTime: number): string {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - targetTime;
    const timeUnits: Record<string, number> = {
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
    };

    for (const unit in timeUnits) {
      const value = Math.floor(timeDifference / timeUnits[unit]);
      if (value >= 1) {
        return value === 1 ? `1 ${unit} ago` : `${value} ${unit}s ago`;
      }
    }

    return "Just now";
  }
  const onClick=()=>{
    setopenPop(!openPop)
    if (item?.type==="fillup") {
      navigate(`fillup-data/${item?._id}`)
    } else {
      navigate(`premade-data/${item?._id}`)
    }

  }
  return (
    <li onClick={()=>onClick()}>
      <span>{item?.propertyName}</span>
      <span>{timeAgo}</span>
    </li>
  );
}

export default WorkSpaceList;
