import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Contact.css';
import contactImg from '../../assets/images/contact-img.png';
import gmailIcon from '../../assets/images/gmail.png';
import linkedinIcon from '../../assets/images/linkedin2.png';
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, [category]: value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="3d-casual-life-woman-working-at-laptop" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <div >
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}