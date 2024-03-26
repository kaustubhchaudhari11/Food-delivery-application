import React, { useState, useEffect } from 'react';
import {auth,provider} from './config';
import { signInWithPopup } from 'firebase/auth';
import Body from '../components/Body';

export const Sign_in = () => {
    const [value, SetValue] = useState('');

    useEffect(() => {
        SetValue(localStorage.getItem('email'));
    }, []);

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            SetValue(data.user.email);
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("userName", data.user.displayName || data.user.email);
            window.location.reload(); // Add this line to force reload after sign-in
        }).catch((error) => {
            console.error("Error signing in with Google:", error);
        });
    };

    return (
        <div className='px-4'>
            {value ? <Body/> : 
                <button onClick={handleClick}>
                    Sign in with Google
                </button>
            }
        </div>
    );
};

