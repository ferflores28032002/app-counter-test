import { useState } from "react";

import { useCounterProps } from "../interfaces/usecounter.interface";

export const useCounter = (Props: useCounterProps) => {
  const [counter, setcounter] = useState<number>(Props.initialValue);

  const increaseCounter = (increaseValue: number = 1): void => {
    setcounter((prevCounter) => prevCounter + increaseValue);
  };

  const decreaseCounter = (decreaseValue: number = 1): void => {
    if (counter <= 0) return;
    setcounter((prevCounter) => prevCounter - decreaseValue);
  };

  const resetCounter = (): void => {
    setcounter(0);
  };

  return {
    // atributos
    counter,

    // metodos
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
};
