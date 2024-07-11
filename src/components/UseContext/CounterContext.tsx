import { createContext } from "react";

export const CounterContext = createContext<{
  counter: number;
  setCounter: (counter: number) => void;
}>({
  counter: 0,
  setCounter: () => {},
});
