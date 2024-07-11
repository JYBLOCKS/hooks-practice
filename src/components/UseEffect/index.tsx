import { useEffect, useState } from "react";

/**
 * useEffect este hook renderisa el componente si alguno de los estados es actualizado
 * nos ayuda que el componente cambie visualmente gracias a que tiene dependencias
 * que valida que es lo que tiene que cambiar y el por que datos debe renderizar
 * tiene dos parametros
 * 1. una function que nos ayuda a ejecutar codigo dentro de el
 * 2. un array de dependiencias, si este viene [] solo hace una vez lo que esta dentro 
 * de la funcion
 * si no es proporcionado hace la ejecucion de el mismo multiples veces hasta que acabe 
 * con la memoria de renderizado
 *
 * nos ayuda a poder obtener datos de un API
 * aunque no maneja promesas ni funciones async/await
 * se puede solucionar muy facil, solo es necesario hacer una funcion dentro del useEffect
 * y despues llamarla otra vez  de esta forma hace que la promesa o la funcion ejecute lo 
 * que tenga que ejecutar y termine la secuencia
 * se puede ver de estas formas
 * 
 * useEffect(() => {
    const getResults = async () => {
        const response = await fetch('http://localhost:8080/fakeAPI')
        const data = await response.json()
        setResults(data)
    }
    getResults()
  }, []);

 * si se quisiera terminar de ejecutar algo antes de tiempo por que tal vez el usuario 
 * ya no esta viendo el componente se puede hacer con un return () => {} o usando el AbortController
 */

export function UseEffect() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  }, [counter]);

  return (
    <>
      <h1>useEffect</h1>
      <h2>{counter}</h2>
    </>
  );
}
