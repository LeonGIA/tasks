import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Value {
    setValue: (value: number) => void;
    value: number;
}

function Doubler(props: Value): JSX.Element {
    return (
        <Button onClick={() => props.setValue(2 * props.value)}>Double</Button>
    );
}

function Halver(props: Value): JSX.Element {
    return (
        <Button onClick={() => props.setValue(0.5 * props.value)}>Halve</Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setValue={setValue} value={value}></Doubler>
            <Halver setValue={setValue} value={value}></Halver>
        </div>
    );
}
