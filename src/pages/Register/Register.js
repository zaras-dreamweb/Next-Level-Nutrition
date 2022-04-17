import React, { useEffect, useState } from 'react';
import './Register.css'
import image from '../../images/banner4.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogins from '../SocialLogins/SocialLogins';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;

    if (errors) {
        errorElement = <p className='text-red-500'>{errors?.message}</p>
    }


    const handleEmailChange = event => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" })
        } else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" });
        }

    }
    const handlePasswordChange = event => {
        const passwordRegex = /.{8,}/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Minimum 8 characters' });
            setUserInfo({ ...userInfo, password: '' })

        }

    };

    const handleConfirmPasswordChange = event => {

        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, confirmPasswordError: '' });
        }
        else {
            setErrors({ ...errors, confirmPasswordError: 'Passwords did not match' });
            setUserInfo({ ...userInfo, confirmPassword: '' })

        }
    }


    const handleFormSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    return (
        <div>
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={image} className="img-fluid" alt='' />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Register Form</h3>
                        <div className="form-style">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group pb-3">
                                    <input onChange={handleEmailChange} type="email" placeholder="Your Email" className="form-control" required />
                                    {
                                        errors?.emailError && <p className='text-red-500'>{errors.emailError}</p>
                                    }
                                </div>
                                <div className="form-group pb-3">
                                    <input onChange={handlePasswordChange} type="password" placeholder="Your Password" className="form-control" required />
                                    {
                                        errors?.passwordError && <p className='text-red-500'>{errors.passwordError}</p>
                                    }
                                </div>
                                <div className="form-group pb-3">
                                    <input onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" className="form-control" required />
                                    {
                                        errors?.confirmPasswordError && <p className='text-red-500'>{errors.confirmPasswordError}</p>
                                    }
                                </div>
                                {errorElement}
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Register</button>
                                </div>
                            </form>
                            <div className="sideline">OR</div>
                            <div>
                                <SocialLogins></SocialLogins>
                            </div>
                            <div className="pt-4 text-center">
                                Already have an Account? <Link to="/login">Login</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;