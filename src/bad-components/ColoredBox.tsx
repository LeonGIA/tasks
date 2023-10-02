import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <Button
                    onClick={() =>
                        setColorIndex((1 + colorIndex) % COLORS.length)
                    }
                >
                    Next Color
                </Button>
                <div
                    data-testid="colored-box"
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS[colorIndex],
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: "5px"
                    }}
                ></div>
            </div>
        </div>
    );
}