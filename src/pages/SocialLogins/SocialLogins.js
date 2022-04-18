import React, { useEffect, useState } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import google from '../../images/google.png'

const SocialLogins = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    if (user || gitUser) {
        navigate('/');
    }

    useEffect(() => {
        if (error || gitError) {
            toast(error?.message)
        }
    }, [error || gitError]);

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-warning w-100 font-weight-bold mt-2 ">Sign In With Google</button>
            <button onClick={() => signInWithGithub()} className="btn btn-warning w-100 font-weight-bold mt-2 ">Sign In With GitHub</button>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogins;