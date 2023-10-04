import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

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

    function displayEdits(): JSX.Element {
        if (canEdit)
            return (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        disabled={!canEdit}
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <Form.Group controlId="formChangeUserName" as={Row}>
                        <Form.Label column sm={2}>
                            Enter a Username:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="string"
                                value={userName}
                                disabled={!canEdit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUserName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </div>
            );
        else
            return (
                <span>
                    {!canEdit
                        ? isStudent
                            ? `${userName} is a student`
                            : `${userName} is not a student`
                        : ""}
                </span>
            );
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

            {displayEdits()}
        </div>
    );
}
