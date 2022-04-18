import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
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
                <h1 className='services-title text-center text-warning font-bold mt-10 text-6xl'>My Services</h1>
                <div className='services-container grid gap-x-10 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;