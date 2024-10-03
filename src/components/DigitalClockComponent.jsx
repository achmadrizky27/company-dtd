import React, { useState, useEffect } from "react";

const DigitalClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const times = "WIB";
    return `${hours} : ${minutes} : ${seconds} : ${times}`;
  };

  return <div className="border-2 border-sky-500 duration-300 px-2 py-0.5 rounded-md text-md hover:shadow-lg hover:shadow-sky-200">{formatTime(time)}</div>;
};

export default DigitalClockComponent;
