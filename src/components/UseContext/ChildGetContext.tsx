import { useContext, useEffect } from "react";
import { CounterContext } from ".";

export function ChildGetContext() {
  const { counter, setCounter } = useContext(CounterContext);

  useEffect(() => {
    if (counter < 9) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 3000);
    }
  }, [counter]);

  return <div>{counter}</div>;
}
