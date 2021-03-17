import React from "react";
import "./HeaderClass.css";
interface HeaderComponentProps {
  componentType: string;
  dataTestId: string;
}
interface HeaderComponentState {
  visitorName: string;
  changeCounter: number;
}

export class HeaderClass extends React.Component<
  HeaderComponentProps,
  HeaderComponentState
> {
  constructor(props: HeaderComponentProps) {
    super(props);
    this.state = { visitorName: "", changeCounter: 0 };
  }
  render() {
    return (
      <>
        <div className="class-header" data-testid={this.props.dataTestId}>
          Hello {this.state.visitorName} from Header as a{" "}
          {this.props.componentType} Component  | Change counter: {this.state.changeCounter}
        </div>
        <div>
          <input
            className="functional-input"
            onChange={(e) => this.setState(state => ({ 
                visitorName: e.target.value,
                changeCounter: state.changeCounter + 1
            }))}
          />
        </div>
      </>
    );
  }
}
