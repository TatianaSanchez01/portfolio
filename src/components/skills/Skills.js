import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { mySkills } from './mySkills';
import { myExperience } from './myExperience';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './Skills.css';


export const Skills = () => {

    const [skills, setSkills] = useState(mySkills);
    const [experiences, setExperience] = useState(myExperience);

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <span>Skills & Experience</span>
                    <Col xs={12} md={6} xl={6}>
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
                    <Col xs={12} md={6} xl={6}>
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




        </section >
    )
}