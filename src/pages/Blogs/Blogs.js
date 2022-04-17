import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container text-center border-8 mt-4'>
            <h2 className='mt-10 mb-10 text-black font-bold text-5xl '>Blogs page</h2>
            <h2 className='text-warning font-extrabold'> Difference between Authorization and Authentication?</h2>
            <p className='pb-10 text-l font-bold '>Authentication is verifying or confirming someones identity, that who someone is. Whereas, Authorization means checking out, in which places that person has his access to. Usually Authentication is done before Authorization. Authorization depends on Authentication, like the login forms are used to Authenticate a user, to give him Authorization to access into.</p>

            <h2 className='text-warning font-extrabold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='pb-10 text-l font-bold '>Firebase is development platform. It is used for web, android, iOS and also gaming apps application that helps us build, improve, and grow your app. It helps to make our application rich and collaborative, allowing us to have client-side codes, by us giving secure access to the database.
                The top alternative firebase authentications are:
                <ul>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Auth0</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> MongoDB</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Passport</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Keycloak</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Amazon Cognito</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Okta</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> JSON Web Token</li>
                </ul>
            </p>

            <h2 className='text-warning font-extrabold'>What other services does firebase provide other than authentication?</h2>
            <p className='text-l font-bold '>There are a many other services that Firebase provides. For example:
                <ul >
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Cloud Firestore</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Cloud Functions</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Authentication</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Hosting</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Cloud Storage</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Google Analytics</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Predictions</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Cloud Messaging</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Dynamic Links</li>
                    <li><FontAwesomeIcon className='text-warning pr-2' icon={faDotCircle}></FontAwesomeIcon> Remote Config</li>
                </ul>
            </p>
        </div >
    );
};

export default Blogs;