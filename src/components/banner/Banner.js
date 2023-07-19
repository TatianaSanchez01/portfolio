import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Banner.css';

import profilePhoto from '../../assets/images/profile2.png';

export const Banner = () => {


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio!</span>
                        <h1>{`Hi, I'm Tatiana`} <span className='wrap'> a web developer</span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur at magna nec fringilla. Aliquam feugiat aliquet nisi, vel laoreet mauris fringilla ut. In viverra turpis erat, malesuada vestibulum augue.</p>
                        <button onClick={() => console.log('my CV')}>Download my CV <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profilePhoto} alt='Header' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}