import { useEffect, useRef, useState } from "react";

export function useTypingEffect(
  textToType,
  enterKeyStrokeDurationInMs,
) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > textToType.length) {
        clearInterval(interval);
      }
    }, enterKeyStrokeDurationInMs);
    return () => {
      currentPositionRef.current = 0;
      setCurrentPosition(0);
    }
  }, [enterKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
} 