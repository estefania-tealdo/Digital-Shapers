import React from "react";
import { InputGroup, Row, Col, Jumbotron, Container } from "react-bootstrap";
import MemberComp from "./components/MemberComp";
import "./components/main.css";
import 'font-awesome/css/font-awesome.min.css';
import pattern from "./images/download2.jpg";


export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundImage: 'url(' + pattern + ')',
        };
    }

    render() {
        return (
            <div className="main-content">
                <div className='bg-image' style={{ backgroundImage: 'url(' + pattern + ')', backgroundSize: 'cover', height: '450px' }}>
                    <div className="center-content">
                        {/* <Jumbotron className="jumbotron-services-area" fluid> */}
                            <div className="members">
                                <Container>
                                    <Row>
                                        <Col><MemberComp member="Johanna" /></Col>
                                        <Col><MemberComp member="Richard" /></Col>
                                        <Col><MemberComp member="Estefania" /></Col>
                                        <Col><MemberComp member="Natasha" /></Col>
                                        <Col><MemberComp member="Manoj Keerthy" /></Col>
                                    </Row>
                                </Container>
                            </div>
                        {/* </Jumbotron> */}
                    </div>
                </div>
            </div>
        )
    }
}