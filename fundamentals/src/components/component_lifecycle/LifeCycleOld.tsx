import React from "react";

interface LifeCycleOldProps {
    title: string;
    dataTestId: string;
}
export class LifeCycleOld extends React.Component<LifeCycleOldProps> {
    constructor(props: LifeCycleOldProps) {
        super(props);
    }
    render(){
        return (<div data-testid={this.props.dataTestId}>{this.props.title}</div>)
    }
}