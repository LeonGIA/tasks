import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, rollDice1] = useState<number>(2);

    const [dice2, rollDice2] = useState<number>(1);

    function rollDice(diceNum: number) {
        if (diceNum === 1) {
            rollDice1(d6());
        } else {
            rollDice2(d6());
        }
    }

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <span data-testid="right-die">{dice2}</span>
            <Button onClick={() => rollDice(1)}>Roll Left</Button>
            <Button onClick={() => rollDice(2)}>Roll Right</Button>

            {dice1 === dice2 ? (
                dice1 === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span>Win</span>
                )
            ) : (
                ""
            )}
        </div>
    );
}
