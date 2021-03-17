
interface LifeCycleProps {
    dataTestId: string;
}

export default function LifeCycle(props: LifeCycleProps) {
    const {dataTestId} = props;
    return(
        <div data-testid={dataTestId}>Hello from Lifecycle component</div>
    )
}