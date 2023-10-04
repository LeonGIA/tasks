import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter an Answer:</Form.Label>
                <Form.Control
                    type="string"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserAnswer(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <span>{userAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
