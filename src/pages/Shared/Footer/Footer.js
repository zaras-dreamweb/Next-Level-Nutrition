import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import book from '../../../images/facebook.png';
import insta from '../../../images/insta.png';
import tweet from '../../../images/tweet.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="bg-warning mt-40 py-8 pl-20 grid gap-x-10 grid-cols-1 md:grid-cols-3">
                    <div>
                        <Card className='bg-warning border-0 ml-10 border-start border-3' style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title>Hi! I am Laura Styphen</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">I am a Nutritionist</Card.Subtitle>
                                <Card.Text>
                                    I did courses on Fitness Nutrition, Optimum nutrition for health and performance, Basics of Nutrition, Exercise Science Specialist.More then 500 people are under my mentorship.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='bg-warning border-0 ml-10 border-start border-3' style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title>My Goals</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Make it Your GOAL too!</Card.Subtitle>
                                <Card.Text>
                                    My goal is to stay fit and eat healthy. I dont compromise with my health.My clients are my inspiration.Let me help you out to live a better and healthy life. Set meal plans and some little exercise and eveything turns perfect.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='bg-warning border-5 ' style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title className='pt-4'>Contact Me</Card.Title>
                                <Card.Text>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +347-209-5467</h5>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +347-209-5469</h5>
                                    <p className="card-text"><FontAwesomeIcon icon={faAt}></FontAwesomeIcon> www.nxt@gmail.com</p>
                                    <div className='grid grid-cols-3 pt-6 '>
                                        <Link className='pt-2' to='/'><img style={{ height: '30px' }} src={book} alt="" /></Link>
                                        <Link className='pt-1' to='/'><img style={{ height: '40px' }} src={insta} alt="" /></Link>
                                        <Link className='pt-1' to='/'><img style={{ height: '40px' }} src={tweet} alt="" /></Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <Link to="/"> Next Level Nutrition</Link>
                </div>
            </footer >
        </div >
    );
};

export default Footer;