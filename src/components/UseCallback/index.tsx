import { ChangeEvent, useCallback, useState } from "react";
import { ItemList } from "./ItemList";

/**
 * useCallback se usa para memorizar funciones, este puede emular el hook useMemo
 * el useCallback es optimo para cuando la ejecucion de una funcion se ejecuta varias veces
 * por el renderizado de componentes hijos y padres
 * al igual que el useMemo el uso exesivo de este hook puede afectar al rendimiento
 * 
 */

export function UseCallback() {
  const [number, setNumber] = useState<number>(0);
  const [theme, setTheme] = useState<boolean>(true);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const userTheme = {
    backgroundColor: theme ? "transparent" : "#FFF",
    color: theme ? "#FFF" : "#333",
  };

  return (
    <div style={userTheme}>
      <h1>useCallback</h1>
      <input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNumber(Number(e.target.value));
        }}
      />
      <ItemList getItems={getItems}/>
      <button onClick={() => setTheme(!theme)}>Toggle theme</button>
    </div>
  );
}
