import { useEffect, useRef, useState } from "react";

/**
 * useRef se usa para crear una referencia a un objeto o valor, como en este caso con el
 * initialState o una referencia a un elemento en el DOM
 */

interface User {
  id: string;
  name: string;
}

export function UseRef() {
  const [user, setUser] = useState<User>();
  const initialState = useRef<User>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) {
      setUser({ id: "code-1", name: "Test changed" });
      initialState.current = { id: "code-1", name: "Test initial" };
    }
  }, [user]);

  const resetStateUser = () => {
    setUser(initialState.current);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <h1>useRef</h1>
      <div style={{ marginBottom: "16px" }}>
        <h2>{user?.id}</h2>
        <h2>{user?.name}</h2>
        <button onClick={resetStateUser} style={{ width: 130, height: 46 }}>
          Reset user
        </button>
      </div>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <input ref={inputRef} />
        <button onClick={focusInput} style={{ width: 130, height: 46 }}>
          Focus input
        </button>
      </div>
    </>
  );
}
