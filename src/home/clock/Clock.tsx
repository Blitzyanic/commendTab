import {useEffect, useState} from "react";

function getCurrentTime(): string {
  const date: Date = new Date();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // Add zero-padding to hours and minutes
  const paddedHours: string = hours < 10 ? '0' + hours : hours.toString();
  const paddedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();

  return paddedHours + ":" + paddedMinutes;
}


function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}
export default Clock;