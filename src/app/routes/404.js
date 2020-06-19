import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TimerNested = ({ timer }) => {
  useEffect(() => {
    console.log("TimerNested rendered");
    return () => console.log("TimerNested un-rendered");
  });

  return <div>{timer}</div>;
};

const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log("Interval started");
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => {
      console.log("Interval cleared");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Timer rendered");
    return () => console.log("Timer un-rendered");
  });

  return <TimerNested timer={timer} />;
};

const CheckerNested = () => {
  useEffect(() => {
    console.log("CheckerNested rendered");
    return () => console.log("CheckerNested un-rendered");
  });

  return (
    <div>
      <Timer />
    </div>
  );
};

const Checker = () => {
  useEffect(() => {
    console.log("Checker rendered");
    return () => console.log("Checker un-rendered");
  });

  return (
    <div>
      <CheckerNested />
    </div>
  );
};

export function Page404() {
  return (
    <div>
      404
      <Link to="/">Back to home</Link>
      <Checker />
    </div>
  );
}
