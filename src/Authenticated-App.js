import * as React from 'react'
// import Logout from "./components/Logout";
import './Authenticated-App.css'
import Events from "./screens/Events/index.js"
// import Calendar from "./components/Calendar";

function AuthenticatedApp({setAuth, auth}) {

    return (
        <React.Fragment>
            <div>
                {/*<Logout setAuth={setAuth} />*/}
                <Events auth={auth} setAuth={setAuth}/>
                {/*<Calendar auth={auth} />*/}
            </div>
        </React.Fragment>
    )
}

export {AuthenticatedApp}
