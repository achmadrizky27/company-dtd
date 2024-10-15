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
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // If hour is 0 (midnight), show as 12

    return `${hours.toString().padStart(2, "0")} : ${minutes} : ${seconds} ${ampm}`;
  };

  return <div className="font-bold font-monserrat text-md">{formatTime(time)}</div>;
};

export default DigitalClockComponent;
