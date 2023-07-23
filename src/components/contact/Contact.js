import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Contact.css';
import TrackVisibility from "react-on-screen";

import contactImg from '../../assets/images/contact-img3.png';
import gmailIcon from '../../assets/images/gmail.png';
import linkedinIcon from '../../assets/images/linkedin.png';
export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate-zoom-in" : ""}>
                                    <img src={contactImg} alt="3d-casual-life-woman-working-at-laptop" />
                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate-zoom-in" : ""}>
                                    <h2>Get in Touch</h2>
                                    <Row>
                                        <Row className="px-1 row-info">
                                            <img src={gmailIcon} alt="gmail icon" className="contact-icon" />
                                            <p className="contact-info"> <a href="mailto:tatiana.sanchez.sanin@gmail.com"> tatiana.sanchez.sanin@gmail.com </a> </p>
                                        </Row>
                                        <Row className="px-1 row-info">
                                            <img src={linkedinIcon} alt="linkedin icon" className="contact-icon" />
                                            <p className="contact-info"> <a href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"> /tatiana-sanchez-sanin </a> </p>
                                        </Row>
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}