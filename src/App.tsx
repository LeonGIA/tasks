import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

import logo from "./logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Introduction to Software Engineering
                <img src={logo} alt="Homepage logo" />
                <h4>Maintained by: Leon Giang</h4>
            </header>

            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />

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
