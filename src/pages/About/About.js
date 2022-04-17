import React from 'react';
import pic from "../../images/ami.png"

const About = () => {
    return (
        <div className='container'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 mb-20'>
                <div className='mt-20'>
                    <img src={pic} alt="" />
                </div>
                <div className='mt-28'>
                    <h1>Hi! This is <strong>Sadia Tuz Johora</strong>. I started my journey to become a web developer with Programing Hero batch 5. I have learnt a lot of things in this course.I would love to see myself as a web developer as I proceed through this course working more on my flaws. </h1>
                </div>
            </div>
        </div>
    );
};

export default About;