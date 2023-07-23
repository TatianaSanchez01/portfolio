import { Container, Row, Col } from "react-bootstrap"
import logo from '../../assets/images/logo.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import './Footer.css';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" className="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/tatiana-sanchez-sanin/"><img src={linkedin} alt="linkedin social icon" /></a>
                            <a href="https://github.com/TatianaSanchez01"><img src={github} alt="github social icon" /></a>
                        </div>
                        <p>Copyright 2023. All Right Reserved. Coded by Tatiana Sanchez</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
