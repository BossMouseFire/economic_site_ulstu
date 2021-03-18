import React, { useState, useEffect } from "react";

export default function MachineText({ arrayText, className }) {
  const [textPrinted, setTextPrinted] = useState("");
  const [textErasable, setTextErasable] = useState("");
  let line = 0;
  let count = 0;
  let stateText = true;

  useEffect(() => {
    typeLine(line, count);
  }, []);

  useEffect(() => {
    if (count < arrayText[line].length && stateText === true) {
      setTextPrinted(textErasable + "|");
    }
  }, [textErasable]);

  useEffect(() => {
    if (count >= arrayText[line].length && stateText !== true) {
      setTextErasable(textPrinted.slice(0, count));
    }
  }, [textPrinted]);

  const setDirectOrder = (state) => {
    stateText = state;
  };
  const typeLine = (line, count) => {
    let interval = setTimeout(() => {
      if (count < arrayText[line].length && stateText === true) {
        setTextErasable((prev) => prev + arrayText[line][count]);
        count++;
      } else if (line === arrayText.length - 1) {
        setTextPrinted(arrayText[line]);
        clearInterval(interval);
        return true;
      } else {
        setDirectOrder(false);
        if (count === 0) {
          setDirectOrder(true);
          setTextErasable("");
          setTextPrinted("|");
          line++;
        } else {
          setTextPrinted((prev) => prev.slice(0, count) + "|");
          count--;
        }
      }
      typeLine(line, count);
    }, getRandomNumber(300) * 1.5);
  };

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  return <div className={className}>{textPrinted}</div>;
}
