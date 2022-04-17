import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const SocialLogins = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    useEffect(() => {
        if (error) {
            toast(error?.message)
        }
    }, [error]);

    return (
        <div>
            <button onClick={() => signInWithGoogle()} type="submit" className="btn btn-warning w-100 font-weight-bold mt-2">Sign Up With Google</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogins;