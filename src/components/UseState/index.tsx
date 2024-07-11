import { useState } from "react";

/**
 * useState: se usa para manejar estados de forma inmutable
 * (que no puede sobre escribirse de manera directa),
 * ejemplo de esto es como maneja el estado del contador
 * pudiendo sumar o restar al contador
 * como se puede ver resive dos parametros
 * 1. el valor del estado creado
 * 2. la funcion del estado para poder modificarlo
 */

export function UseState() {
  const [counter, setCounter] = useState<number>(0);

  const onClickDecrement = () => {
    setCounter(counter - 1);
  };

  const onClickIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>useState</h1>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <button onClick={onClickDecrement} style={{ width: 50, height: 46 }}>-</button>
        <h2>{counter}</h2>
        <button onClick={onClickIncrement} style={{ width: 50, height: 46 }}>+</button>
      </div>
    </>
  );
}
