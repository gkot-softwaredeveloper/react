import "./App.css";
import { HeaderClass } from "./components/class/HeaderClass";
import LifeCycle from "./components/component_lifecycle/LifeCycle";
import { LifeCycleOld } from "./components/component_lifecycle/LifeCycleOld";
import Render from "./components/condition_rendering/Render";
import HeaderFunctional from "./components/functional/HeaderFunctional";
import { useState } from "react";
import { useFaker } from "react-fakers";

function App() {
  const [oldLifeCycleTitle, setOldLifeCycleTitle] = useState<string>("");
  const { success } = useFaker({});

  return (
    <>
      <div className="App">
        <HeaderClass componentType="Class" dataTestId="header-class" />
        <HeaderFunctional componentType="Function" dataTestId="header-func" />
      </div>
      <Render dataTestId="render" />
      <LifeCycle dataTestId="app-lifecycle" />
      <LifeCycleOld
        dataTestId="app-lifecycleold"
        title={`Hello from Old Life Cycle ${oldLifeCycleTitle}`}
      />
      <input
        type="button"
        onClick={() => {
          setOldLifeCycleTitle(success[0].firstname);
        }}
        value="Get Title"
      />
    </>
  );
}

export default App;
