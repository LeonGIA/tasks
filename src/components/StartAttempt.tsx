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
            <button
                onClick={() => updateQuizState(false, true)}
                disabled={quizInProgress || quizAttempts <= 0}
            >
                Start Quiz
            </button>

            <button
                onClick={() => updateQuizState(false, false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </button>

            <button onClick={addQuizAttempts} disabled={quizInProgress}>
                Mulligan
            </button>

            <div>Number of attempts: {quizAttempts}</div>
        </div>
    );
}
