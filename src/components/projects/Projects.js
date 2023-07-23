import React from 'react';
import { Col, Row, Container, Nav, Tab } from 'react-bootstrap';
import { useState } from 'react';
import { myProjects } from './myProjects';
import './Projects.css';
import github2 from '../../assets/images/github2.png';
import demo from '../../assets/images/demo.png';
export const Projects = () => {
    const [projects, setProjects] = useState(myProjects);
    const backendProjects = projects.filter(project => project.category.includes("Backend"));
    const frontendProjects = projects.filter(project => project.category.includes("Frontend"));
    const fullstackProjects = projects.filter(project => project.category.includes("Fullstack"));


    return (
        <section className='projects' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Duis luctus nunc ligula, ac posuere sapien maximus ut. Morbi.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Fullstack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <div className='projects-portfolio'>
                                            {
                                                projects.map((project, idx) => {
                                                    return (
                                                        <div key={idx} className='project-card'>
                                                            <Col>
                                                                <div className="imgbx">
                                                                    <img src={project.imgUrl} alt="Project" />
                                                                    <div className='project-hover'>
                                                                        <p>{project.tech}</p>
                                                                        <div className='project-links'>
                                                                            <a href={project.githubLink} > <img src={github2} alt='github link project' /> </a>
                                                                            <a href={project.demoLink} > <img src={demo} alt='demo project link' /> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="project-text">
                                                                    <h4>{project.name}</h4>
                                                                    <p>{project.description}</p>


                                                                </div>

                                                            </Col>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <div className='projects-portfolio'>
                                            {
                                                backendProjects.map((project, idx) => {

                                                    return (
                                                        <div key={idx} className='project-card'>
                                                            <Col>
                                                                <div className="imgbx">
                                                                    <img src={project.imgUrl} alt="Project" />
                                                                    <div className='project-hover'>
                                                                        <p>{project.tech}</p>
                                                                        <div className='project-links'>
                                                                            <a href={project.githubLink} > <img src={github2} alt='github link project' /> </a>
                                                                            <a href={project.demoLink} > <img src={demo} alt='demo project link' /> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="project-text">
                                                                    <h4>{project.name}</h4>
                                                                    <p>{project.description}</p>
                                                                </div>

                                                            </Col>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <div className='projects-portfolio'>
                                            {
                                                frontendProjects.map((project, idx) => {

                                                    return (
                                                        <div key={idx} className='project-card'>
                                                            <Col>
                                                                <div className="imgbx">
                                                                    <img src={project.imgUrl} alt="Project" />
                                                                    <div className='project-hover'>
                                                                        <p>{project.tech}</p>
                                                                        <div className='project-links'>
                                                                            <a href={project.githubLink} > <img src={github2} alt='github link project' /> </a>
                                                                            <a href={project.demoLink} > <img src={demo} alt='demo project link' /> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="project-text">
                                                                    <h4>{project.name}</h4>
                                                                    <p>{project.description}</p>
                                                                </div>

                                                            </Col>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        <div className='projects-portfolio'>
                                            {
                                                fullstackProjects.map((project, idx) => {

                                                    return (
                                                        <div key={idx} className='project-card'>
                                                            <Col>
                                                                <div className="imgbx">
                                                                    <img src={project.imgUrl} alt="Project" />
                                                                    <div className='project-hover'>
                                                                        <p>{project.tech}</p>
                                                                        <div className='project-links'>
                                                                            <a href={project.githubLink} > <img src={github2} alt='github link project' /> </a>
                                                                            <a href={project.demoLink} > <img src={demo} alt='demo project link' /> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="project-text">
                                                                    <h4>{project.name}</h4>
                                                                    <p>{project.description}</p>
                                                                </div>

                                                            </Col>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container >

        </section >
    )
}