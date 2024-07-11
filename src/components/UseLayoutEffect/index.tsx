import { useLayoutEffect, useState } from "react";

/**
 * useLayoutEffect actua igual que el hook useEffect,
 * pero la diferencia es que este se ejecuta cuando
 * todo el proceso de renderizado termina, hasta que eso no pase
 * este hook no va a ejecutarse, si estamos manejando estados
 * o referencias de estados con useRef estas pueden verse modificadas en tiempo de
 * ejecucion cuando se usa useEffect y este es el problema que viene a solucionar
 * useLayoutEffect.
 */

export function UseLayoutEffect() {
  const [count, setCount] = useState<number>(0);

  useLayoutEffect(() => {
    /// se ejecuta cuando se termina de renderizar
    ///console.log(count);
  }, [count]);

  const onClickIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>useLayoutEffect</h1>
      <button onClick={onClickIncrement}>+</button>
      <h2>{count}</h2>
    </>
  );
}
