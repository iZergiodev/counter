import React, { useEffect, useState } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);
  return (
    <div className="counter">
      <div className="digit">
        {String(Math.floor(time / 3600)).padStart(2, "0")}
      </div>
      <div className="digit">
        {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}
      </div>
      <div className="digit">{String(time % 60).padStart(2, "0")}</div>
    </div>
  );
};

export default Counter;
