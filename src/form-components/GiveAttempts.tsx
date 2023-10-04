import React, { ReactText, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userAttempts, setUserAttempts] = useState<number>(3);
    const [numRequestAttempts, requestAttempts] = useState<string>("0");

    function changeUserAttempts(attempts: number): void {
        setUserAttempts(attempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Enter the number of requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        requestAttempts(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <span>Current Attempts: {userAttempts}</span>
            <Button
                disabled={userAttempts <= 0}
                onClick={() => changeUserAttempts(userAttempts - 1)}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    changeUserAttempts(
                        !isNaN(parseInt(numRequestAttempts))
                            ? parseInt(numRequestAttempts) + userAttempts
                            : userAttempts
                    )
                }
            >
                gain
            </Button>
        </div>
    );
}
