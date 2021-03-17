import "./App.css";
import { HeaderClass } from "./components/class/HeaderClass";
import Render from "./components/condition_rendering/Render";
import HeaderFunctional from "./components/functional/HeaderFunctional";

function App() {
  return (
    <>
      <div className="App">
        <HeaderClass componentType="Class" dataTestId="header-class" />
        <HeaderFunctional componentType="Function" dataTestId="header-func" />
      </div>
      <Render dataTestId="render" />
    </>
  );
}

export default App;
