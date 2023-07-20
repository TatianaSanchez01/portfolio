import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Carousel from "react-multi-carousel";
import { mySkills } from './mySkills';
import { myExperience } from './myExperience';
import "react-multi-carousel/lib/styles.css";

import './Skills.css';
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
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Row>

                <Row>
                    <Col xs={12} md={6} xl={5}>
                        <span>Tech Skills</span>
                        <div className='skills-container'>
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
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span>Work Experience</span>
                        <div className='experience-container'>
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
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Carousel background" />
        </section >
    )
}