import { useEffect } from "react";

// move this to shared
export default function useInterval(
  condition: boolean,
  callback: () => void,
  delay: number = 2000,
) {
  useEffect(() => {
    let interval: number | undefined;

    if (condition) {
      interval = window.setInterval(callback, delay);
    }

    return () => {
      window.clearInterval(interval);
    };
  }, [condition]);
}
