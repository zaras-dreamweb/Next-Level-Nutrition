import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import image from '../../images/banner4.jpg'
import SocialLogins from '../SocialLogins/SocialLogins';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });


    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        if (hookError) {
            toast(hookError?.message)
        }
    }, [hookError]);


    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    if (sending) {
        return <p>Sending...</p>;
    }

    const handlePasswordReset = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }

    }


    return (
        <div>
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={image} className="img-fluid" alt='' />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3 className="pb-3">Login Form</h3>
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
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center"></div>
                                    <div>Forget Password?<button onClick={handlePasswordReset} className='btn btn-link text-decoration-none pb-2'>Reset Password</button></div>
                                </div>
                                {errorElement}
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2">Login</button>
                                </div>
                            </form>
                            <div className="sideline">OR</div>
                            <div>
                                <SocialLogins></SocialLogins>
                            </div>
                            <div className="pt-4 text-center">
                                Don't have an Account? <Link to="/register">Register</Link>
                                <ToastContainer></ToastContainer>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;