import { useState } from "react";
import visibilityIcon from "../../assets/visibility.png";

interface RenderProps {
  dataTestId: string;
}

export default function Render(props: RenderProps) {
  const { dataTestId } = props;
  const [visibility, setVisibility] = useState<Boolean>(false);
  return (
    <>
      <div data-testid={dataTestId}>Render component</div>
      <div>
        <input
          data-testid="app-render-checkbox"
          type="checkbox"
          onChange={(e) => setVisibility(e.target.checked)}
        />
        <label>Display</label>
        <div>{visibility && <img  data-testid="app-render-image" src={visibilityIcon} />}</div>
      </div>
    </>
  );
}
