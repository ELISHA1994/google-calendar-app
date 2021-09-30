import * as React from 'react'
import Logout from "./components/Logout";
import './Authenticated-App.css'
import Events from "./screens/Events/index.js"
// import Calendar from "./components/Calendar";

function AuthenticatedApp({setAuth, auth}) {
    // const accessToken = localStorage.getItem('accessToken')
    return (
        <React.Fragment>
            <div>
                <Logout setAuth={setAuth} />
                <Events auth={auth}/>
                {/*<Calendar auth={auth} />*/}
            </div>
        </React.Fragment>
    )
}

export {AuthenticatedApp}
