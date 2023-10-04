import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [canEdit, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="can-edit-switch"
                label="Edit?"
                checked={canEdit}
                onChange={updateEditMode}
            />

            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student?"
                disabled={!canEdit}
                checked={isStudent}
                onChange={updateStudent}
            />

            <Form.Group controlId="formChangeUserName">
                <Form.Label>Enter a Username:</Form.Label>
                <Form.Control
                    type="string"
                    value={userName}
                    disabled={!canEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(event.target.value)
                    }
                />
            </Form.Group>

            <span>
                {!canEdit
                    ? isStudent
                        ? `${userName} is a student`
                        : `${userName} is not a student`
                    : ""}
            </span>
        </div>
    );
}
