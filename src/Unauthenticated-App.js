import * as React from 'react'
import Login from "./components/Login";
import './Unauthenticated-App.css'
// UnauthenticatedApp
function UnauthenticatedApp({ setAuth }) {
    return (
        <div className="App">
            <h1>Calendar Activities App</h1>
            <Login setAuth={setAuth}/>
        </div>
    )
}

export {UnauthenticatedApp}
