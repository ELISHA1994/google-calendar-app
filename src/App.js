import React from 'react'
import {AuthenticatedApp} from "./Authenticated-App";
import {UnauthenticatedApp} from "./Unauthenticated-App";
// import Logout from "./Logout";

function App() {
    const [auth, setAuth] = React.useState(null)

    return auth ? (
        <AuthenticatedApp setAuth={setAuth} auth={auth}/>
  ) : (
        <UnauthenticatedApp setAuth={setAuth}/>
    )
}

export default App;
