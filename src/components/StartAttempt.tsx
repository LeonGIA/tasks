import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizInProgress, setQuizState] = useState<boolean>(false);

    const [quizAttempts, setAttempts] = useState<number>(4);

    function updateQuizState(increment: boolean, decrement: boolean): void {
        setQuizState(!quizInProgress);

        if (increment) {
            setAttempts(quizAttempts + 1);
        }
        if (decrement) {
            setAttempts(quizAttempts - 1);
        }
    }

    function addQuizAttempts(): void {
        setAttempts(quizAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={() => updateQuizState(false, true)}
                disabled={quizInProgress || quizAttempts <= 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => updateQuizState(false, false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>

            <Button onClick={addQuizAttempts} disabled={quizInProgress}>
                Mulligan
            </Button>

            <div>Number of attempts: {quizAttempts}</div>
        </div>
    );
}
