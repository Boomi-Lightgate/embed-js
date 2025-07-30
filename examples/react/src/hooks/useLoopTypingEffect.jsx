import React, { useEffect, useState } from "react";

export function TypingComponent({ textArray, enterKeyStrokeDurationInMs, stringDelayInMs }) {
  const [currentText, setCurrentText] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = textArray[currentPosition];
      const currentWordLength = currentText.length;

      if (currentWordLength < currentWord.length) {
        const newChar = currentWord[currentWordLength];
        setCurrentText((prevText) => prevText + newChar);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentPosition((prevPosition) => (prevPosition + 1) % textArray.length);
        }, stringDelayInMs);
      }
    }, enterKeyStrokeDurationInMs);

    return () => {
      clearInterval(interval);
    };
  }, [enterKeyStrokeDurationInMs, stringDelayInMs, textArray, currentPosition, currentText]);
  return <div>{currentText}</div>;
}
