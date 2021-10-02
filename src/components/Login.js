import React from "react";
import { useGoogleLogin } from "react-google-login";
import Axios from "axios";
import credentials from "../utils/credentials";

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken.js';


const clientId = credentials.web.client_id

function Login({ setAuth }) {
    const onSuccess = async (res) => {
        console.log('Login Success: currentUser:');
        console.log(res)
        const tokenObj = await Axios.post('https://roja-tech-google-calendar-app.herokuapp.com/getToken', { code: res.code})
        // const tokenObj = await Axios.post('http://localhost:1337/getToken', { code: res.code})
        alert(
            `Logged in successfully welcome 😍.`
        );
        console.log(tokenObj.data)
        setAuth(tokenObj.data);
    }
    const onFailure = (err) => {
        console.log(err)
    }
    const { signIn } = useGoogleLogin({
        clientId: clientId,
        isSignedIn: true,
        accessType: 'offline',
        responseType: 'code',
        scope: "https://www.googleapis.com/auth/calendar.events",
        onSuccess,
        onFailure,
    });
    return (
        <button onClick={signIn} className="button">
            <img src="icons/google.svg" alt="google login" className="icon" />

            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default Login;
