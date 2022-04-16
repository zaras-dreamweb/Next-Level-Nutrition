import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div>
                <h1 className='services-title text-center mt-10'> My Services</h1>
                <div className='services-container grid gap-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 '>
                    {
                        services.map(service => <p key={service.id}>
                            {/* <Card className='card-container h-96 pt-10 ml-36 border-0 relative' style={{ width: '18rem' }}>
                                <Card.Img className='h-60 w-40 p-6' variant="top" src={service.image} />
                                <Card.Body>
                                    <Card.Title> {service.name}</Card.Title>
                                    <Card.Text>
                                        {service.details}
                                    </Card.Text>
                                    <Card.Text><span>Service Charge:</span> ${service.price}</Card.Text>

                                    <Button variant="outline-warning" className='bg-white absolute top-10 right-5'>CkeckOut</Button>{' '}
                                </Card.Body>
                            </Card> */}
                            <Card className="text-center card-container  ml-10 mr-10 relative">
                                <Card.Header>
                                    <Card.Img className='h-60 w-40 p-6' variant="top" src={service.image} />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.details}
                                    </Card.Text>
                                    <Card.Text><span>Service Charge:</span> ${service.price}</Card.Text>
                                    <Button variant="outline-warning" className='bg-white absolute top-8 right-5'>CkeckOut</Button>{' '}
                                </Card.Body>
                            </Card>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;