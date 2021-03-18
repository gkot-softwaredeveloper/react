import { useEffect, useState } from "react";

interface LifeCycleProps {
  dataTestId: string;
}

export default function LifeCycle(props: LifeCycleProps) {
  const [infnityCounter, setInfinityCounter] = useState<number>(0);
  const [startupCounter, setStartupCounter] = useState<number>(0);
  const [dependencyCounter, setDependencyCounter] = useState<number>(0);
  const [isButtonCliced, setIsButtonClicked] = useState<boolean>(false);

  // Interval has been used to show changes every one sec.
  useEffect(() => {
    const interval = setInterval(() => {
      setInfinityCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setStartupCounter((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setDependencyCounter((prev) => prev + 1);
  }, [isButtonCliced, setIsButtonClicked]);

  const { dataTestId } = props;
  return (
    <>
      <div data-testid={dataTestId}>Hello from Lifecycle component</div>
      <div className="app-lifecycle">
        <div>
          This counter has been increas only on the element mount -{" "}
          {startupCounter}
        </div>
        <div>This counter is increasing all the time - {infnityCounter}</div>
        <div>
          This counter is increas only when the button will be clicked -{" "}
          {dependencyCounter}
        </div>
        <div>
          <button onClick={async () => setIsButtonClicked((prev) => !prev)}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
}
