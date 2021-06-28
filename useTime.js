import React from "react";

export function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const interval = setInterval(updateTime, 1000);

    //Clean up
    return () => {
      console.log("Clearing up useTime hook");
      clearInterval(interval);
    };
  }, []);
  return time;
}
