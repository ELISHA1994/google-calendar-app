import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId = '202767119530-kp425ls86h63lsgt1jr03ven88c8av0f.apps.googleusercontent.com';

function Logout({ setAuth }) {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
        setAuth(null);
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="logout-button">
            <img src="icons/google.svg" alt="google login" className="icon" />

            <span className="logout-button-text">Sign out</span>
        </button>
    );
}

export default Logout;
