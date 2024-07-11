import { useState } from "react";
import { ChildGetContext } from "./ChildGetContext";
import { CounterContext } from "./CounterContext";

/**
 * useContext sirve para crear estados que se pueden pasar de padres a hijos sin necesidad
 * de pasar props a los componentes hijos, de esta maneja persiste este estado entre componentes
 * ademas se puede pasar funciones para poder modificar lo que sea necesario en cada hijo
 * no es bueno usarlo para estados globales o estados muy complejos
 */

export function UseContext() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h1>useContext</h1>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <ChildGetContext />
      </CounterContext.Provider>
    </>
  );
}
export { CounterContext };
