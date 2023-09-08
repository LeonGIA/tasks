import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

import logo from "./logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Introduction to Software Engineering
                <img src={logo} alt="Homepage logo" />
                <h4>Maintained by: Leon Giang</h4>
            </header>

            <div className="Body">
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <p>Classes I have Taken Before</p>
                                <li>CISC181</li>
                                <li>CISC108</li>
                                <li>CISC320</li>
                            </ul>

                            <div className="col1">
                                <p>BOX 1</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="Button">
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                            </div>

                            <div className="col2">
                                <p>BOX 2</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
