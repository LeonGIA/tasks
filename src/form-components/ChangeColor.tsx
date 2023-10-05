import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "pink"
    ];
    const [color, changeColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((currColor: string) => (
                <Form.Check
                    key={currColor}
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => changeColor(e.target.value)}
                    label={
                        <p style={{ backgroundColor: `${currColor}` }}>
                            {currColor}
                        </p>
                    }
                    value={currColor}
                    checked={color === currColor}
                ></Form.Check>
            ))}

            <br />
            <span>
                <p style={{ display: "inline" }}>You have chosen </p>
                <p
                    data-testid="colored-box"
                    style={{
                        display: "inline",
                        backgroundColor: `${color}`
                    }}
                >
                    {color}
                </p>
                .
            </span>
        </div>
    );
}
