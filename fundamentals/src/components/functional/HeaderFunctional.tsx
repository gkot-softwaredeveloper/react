import { useState } from "react";
import "./HeaderFunctional.css";

interface HeaderFuncProps {
  componentType: string;
  dataTestId: string;
}

function HeaderFunctional(props: HeaderFuncProps) {
  const [visitorName, setVisitorName] = useState<string>("");
  const [changeCounter, setChangeCounter] = useState<number>(0);
  const { componentType, dataTestId } = props;
  return (
    <>
      <div className="functional-header" data-testid={dataTestId}>
        Hello {visitorName} from Header as a {componentType} Component | Change
        counter: {changeCounter}
      </div>
      <div>
        <input
          className="functional-input"
          onChange={(e) => {
            setVisitorName(e.target.value);
            setChangeCounter((prev) => prev + 1);
          }}
        />
      </div>
    </>
  );
}

export default HeaderFunctional;
