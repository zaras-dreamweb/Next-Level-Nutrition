import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/emoji.jpg'

const NotFound = () => {
    return (
        <div className='container  mb-60'>
            <img className='mx-auto mt-20' style={{ height: '10rem' }} src={pic} alt="" />
            <div className='text-center pb-72' >
                <h2>Sorry! The page you are looking for is not found!</h2>
                <Link to='/'><button className='btn btn-warning text-white'>Go Back to Home</button></Link>
            </div>
        </div >
    );
};

export default NotFound;