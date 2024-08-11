import {useEffect, useState} from "react";
import "./Clock.css"

function getCurrentTime(): string {
  const date: Date = new Date();

  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // Add zero-padding to hours and minutes
  const paddedHours: string = hours < 10 ? '0' + hours : hours.toString();
  const paddedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();

  return paddedHours + ":" + paddedMinutes;
}

function getCurrentDate() {
  const date: Date = new Date();

  const day = date.getDate();
  const month: number = date.getMonth()+1;
  const year: number = date.getFullYear();

  const paddedDay: string = day < 10 ? '0' + day : day.toString();
  const paddedMonth: string = month < 10 ? '0' + month : month.toString();

  return(paddedDay+" "+paddedMonth+" "+year);
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval: number = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cursor-default select-none">
      <p className="clockFont">{currentTime}</p>
      <p className="flex justify-center clockDateFont">{currentDate}</p>
    </div>
  );
}
export default Clock;