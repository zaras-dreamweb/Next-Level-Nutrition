import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service);
    const { name, image, details, price } = service;
    return (
        <div>
            <Card className="text-center card-container  ml-10 mr-10 relative">
                <Card.Header>
                    <Card.Img className='h-60 w-40 p-6' variant="top" src={image} />
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-orange-700'>{name}</Card.Title>
                    <Card.Text className='text-black'>
                        {details}
                    </Card.Text>
                    <Card.Text><span className='text-black font-semibold'>Service Charge:</span > ${price}</Card.Text>
                    <Link to='/checkout'> <Button variant="outline-warning" className='bg-white absolute top-8 right-5'>CheckOut</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;