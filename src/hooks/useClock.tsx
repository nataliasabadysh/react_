import { useState, useEffect, useRef } from "react";

interface ClockState {
  hours: number;
  minutes: number;
  seconds: number;
}

const initState: ClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const useClock = () => {
  const [state, setState] = useState<ClockState>(initState);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null); // Adjusted type based on setInterval's return type

  const getCurrentTime = () => {
    const time = new Date();

    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setState(getCurrentTime());
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        // Added a check to satisfy TypeScript
        clearInterval(intervalIdRef.current);
      }
    };
  }, [state]);

  const formatValue = (
    value: number,
  ): string =>  // Added types here
    value > 9 ? value.toString() : `0${value}`; // Updated logic to prepend 0 for values < 10

  return {
    hours: formatValue(state.hours),
    minutes: formatValue(state.minutes),
    seconds: formatValue(state.seconds),
  };
};
