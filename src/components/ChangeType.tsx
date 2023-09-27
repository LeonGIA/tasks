import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [quizType, setQuizType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuizType(type: QuestionType): void {
        setQuizType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <button onClick={() => changeQuizType(quizType)}>
                Change Type
            </button>
            {quizType === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
