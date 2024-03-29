import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import './Login.css'

function Login() {
    const dispatch = useDispatch();


    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(
                login({
                username: result.user.displayName,
                profilePic: result.user.photoUrl,
                id: result.user.uid,
            })
            );
        }).catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://pngimg.com/uploads/snapchat/snapchat_PNG1.png" className="logo" alt=""/>
                <Button variant="text"  onClick={signIn}>
                    <button className="login_button"> SIGN IN</button>
                </Button>
            </div>
        </div>
    )
}

export default Login
