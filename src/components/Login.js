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
        // console.log(res)
        const tokenObj = await Axios.post('https://roja-tech-google-calendar-app.herokuapp.com/getToken', { code: res.code})
        // const tokenObj = await Axios.post('http://localhost:1337/getToken', { code: res.code})
        // console.log(tokenObj.data.tokens)
        alert(
            `Logged in successfully welcome 😍.`
        );
        // console.log(tokenObj.data)
        setAuth(tokenObj.data.tokens);
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

// function Login({ setAuth }) {
//     const onSuccess = async (res) => {
//         console.log('Login Success: currentUser:');
//         console.log(res)
//         const tokenObj = await Axios.post('http://localhost:1337/getToken', { code: res.code})
//         console.log(tokenObj.data.tokens)
//         alert(
//             `Logged in successfully welcome 😍.`
//         );
//         // refreshTokenSetup(res);
//         // localStorage.setItem('refreshToken', res.code)
//         setAuth(tokenObj.data.tokens);
//     };
//
//     const onFailure = (res) => {
//         console.log('Login failed: res:', res);
//         alert(
//             `Failed to login. 😢 Please ping this to dev-team`
//         );
//     };
//
//     const scope = 'https://www.googleapis.com/auth/calendar.events.readonly';
//
//     const { signIn } = useGoogleLogin({
//         clientId,
//         isSignedIn: true,
//         accessType: 'offline',
//         responseType: 'code',
//         scope: scope,
//         onSuccess,
//         onFailure,
//     });
//
//     return (
//         <button onClick={signIn} className="button">
//             <img src="icons/google.svg" alt="google login" className="icon" />
//
//             <span className="buttonText">Sign in with Google</span>
//         </button>
//     );
// }

export default Login;
