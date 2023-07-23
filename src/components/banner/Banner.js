import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import CV from '../../assets/files/Tatiana Sanchez.pdf';

import profilePhoto from '../../assets/images/profile2.png';

export const Banner = () => {

    return (
        <section className='banner' id='banner'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio!</span>
                                    <h1>{`👋 Hi, I'm Tatiana`} <span className='wrap'> a system's engineering student</span> </h1>
                                    <p>I'm a systems engineer student at Universidad de Antioquia, Colombia. I have a passion for coding and enjoy exploring various programming languages and technologies. While I wouldn't consider myself an expert in any particular language, I have experience working with a diverse set of tools, frameworks, and databases.</p>
                                    <p>I'm constantly learning and expanding my skills in the field of software development. I'm particularly interested in web development and enjoy creating dynamic and interactive user experiences.</p>
                                    <a href={CV} download="Tatiana Sanchez_CV" target='_blank'>
                                        <button onClick={() => console.log('my CV')}>Download my CV <ArrowRightCircle size={25} /> </button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profilePhoto} alt='Header' />
                    </Col>
                </Row>
            </Container>
        </section >
    );
}