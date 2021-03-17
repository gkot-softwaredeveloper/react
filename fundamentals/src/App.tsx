import "./App.css";
import { HeaderClass } from "./components/class/HeaderClass";
import HeaderFunctional from "./components/functional/HeaderFunctional";

function App() {
  return (
    <div className="App">
      <HeaderClass componentType="Class" dataTestId="header-class" />
      <HeaderFunctional componentType="Function" dataTestId="header-func" />
    </div>
  );
}

export default App;
