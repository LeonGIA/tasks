import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface BoxPosition {
    setBoxPosition: (position: number) => void;
    boxPosition: number;
}

function ShoveBoxButton(props: BoxPosition) {
    return (
        <Button onClick={() => props.setBoxPosition(4 + props.boxPosition)}>
            Shove the Box
        </Button>
    );
}

function MoveableBox(props: BoxPosition): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: props.boxPosition + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    boxPosition={position}
                    setBoxPosition={setPosition}
                ></ShoveBoxButton>
                <br />
                <MoveableBox
                    boxPosition={position}
                    setBoxPosition={setPosition}
                ></MoveableBox>
            </div>
        </div>
    );
}
