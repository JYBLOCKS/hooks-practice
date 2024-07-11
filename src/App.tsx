import "./App.css";
import { UseCallback } from "./components/UseCallback";
import { UseContext } from "./components/UseContext";
import { UseEffect } from "./components/UseEffect";
import { UseImperativeHandle } from "./components/UseImperativeHandle";
import { UseLayoutEffect } from "./components/UseLayoutEffect";
import { UseMemo } from "./components/UseMemo";
import { UseRef } from "./components/UseRef";
import { UseState } from "./components/UseState";

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
      <UseImperativeHandle />
      <UseLayoutEffect/>
    </>
  );
}

export default App;
