import React, { useEffect, useState } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import google from '../../images/google.png'

const SocialLogins = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);


    useEffect(() => {
        if (error || gitError) {
            toast(error?.message)
        }
    }, [error || gitError]);

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-warning w-100 font-weight-bold mt-2 ">Sign Up With Google</button>
            <button onClick={() => signInWithGithub()} className="btn btn-warning w-100 font-weight-bold mt-2 ">Sign Up With GitHub</button>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogins;