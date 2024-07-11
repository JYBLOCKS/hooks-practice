import { ChangeEvent, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { CustomInputHandle } from "./CustomInput";

/**
 * useImperativeHandle se usa cuando se quiere controlar la referencia de un componente hijo
 * desde el componente padre, para esto usamos el hook en el hijo
 * en el padre lo que hay que hacer es llamar al hijo, y usar el hook useRef
 * en el hijo se declara un typo donde se pueda ser visible el metodo que se puede usar en el padre
 * a como esta en el ejemplo
 */

export function UseImperativeHandle() {
  const [value, setValue] = useState<string>();
  const inputRef = useRef<CustomInputHandle>(null);

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>useImperativeHandle</h1>
      <CustomInput ref={inputRef} onChange={onChangeInputValue} />
      <button onClick={() => inputRef?.current?.handleFocusInput()}>
        Focus
      </button>

      <h2>{value}</h2>
    </>
  );
}
