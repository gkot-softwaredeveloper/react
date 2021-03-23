import React from "react";

interface LifeCycleOldProps {
  title: string;
  dataTestId: string;
}

export class LifeCycleOld extends React.Component<LifeCycleOldProps> {
  constructor(props: LifeCycleOldProps) {
    super(props);
    console.log("This message came from constructor");
  }
  static RunBeforeRender(): void {
    console.log("This message came from static function");
  }
  componentDidMount(): void {
    console.log("This message came from componentDidMount function");
  }
  componentDidUpdate(): void {
    console.log("This message came from componentDidUpdate function");
  }

  render() {
    console.log("This message came from render function");
    return <div data-testid={this.props.dataTestId}>{this.props.title}</div>;
  }
}
