import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skills.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


import { mySkills } from './mySkills';
import { myExperience } from './myExperience';

import colorSharp from '../../assets/images/color-sharp.jpg';
import meter1 from '../../assets/images/meter1.png';
import meter2 from '../../assets/images/meter2.png'
import meter3 from '../../assets/images/meter3.png'

export const Skills = () => {

    const [skills, setSkills] = useState(mySkills);
    const [experiences, setExperience] = useState(myExperience);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={`skill-bx ${isVisible ? "animate-fade-in" : ""}`}>
                                <h2>Skills</h2>
                                <p>Welcome to my skill showcase! Here, I'll highlight some of the key skills that I possess in the tech world. </p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="web development meter" />
                                        <h5>Web Development</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="scrum meter" />
                                        <h5>Agile Methodology - Scrum</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="web design meter" />
                                        <h5>Web Design</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="problem solving meter" />
                                        <h5>Problem solving</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="assertive communication meter" />
                                        <h5>Assertive Communication</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="software testing meter" />
                                        <h5>Software testing</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="team work meter" />
                                        <h5>Team Work</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="team work meter" />
                                        <h5>Adaptability & Creativity</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="team work meter" />
                                        <h5>Continuous Learner</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="team work meter" />
                                        <h5>Adaptability and Open-Minded Collaborator</h5>
                                    </div>
                                </Carousel>

                            </div>)}
                    </TrackVisibility>
                </Row>

                <Row>
                    <Col xs={12} md={6} xl={5}>
                        <span>Tech Skills</span>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) => (
                                <div className={`skills-container ${isVisible ? "animate-slide-in-left" : ""}`}>
                                    <div className='skills-list'>
                                        {
                                            skills.map((skill, idx) => (
                                                <div key={idx}>
                                                    <div className='skill-item'>
                                                        <div>
                                                            <img src={`${skill.image}`} alt={skill.name}></img>
                                                        </div>
                                                        <p className='skill-name' >{skill.name}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>)}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>

                        <TrackVisibility partialVisibility>
                            {({ isVisible }) => (
                                <div className={`experience-container ${isVisible ? "animate-slide-in-right" : ""}`}>
                                    <span>Work Experience</span>
                                    <div className='experience-list'>
                                        {
                                            experiences.map((experience, idx) => (
                                                <div key={idx}>
                                                    <div className='experience-item'>
                                                        <div className='experience-year'>
                                                            <p>{experience.year}</p>
                                                        </div>

                                                        <div className='experience-work'>
                                                            <h4 className='experience-name'>{experience.name}</h4>
                                                            <p className='experience-company' >{experience.company}</p>
                                                            <ReactTooltip
                                                                id={experience.name}
                                                                effect="solid" arrowColor="#FFF" className="skills-tooltip"
                                                            >{experience.description}</ReactTooltip>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>)}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Carousel background" />
        </section >
    )
}