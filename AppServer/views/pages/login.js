/**
 * Created by matthewxfz on 7/25/17.
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoginReducers from '../reducers/LoginPage'
import LoginForm from "../containers/LoginForm.js";
import Logo from "../components/Logo/Logo.jsx";

let store = createStore(LoginReducers)

//debug
if (module.hot) {
    console.log('module hot is online');
}

function LoginPage() {
    return (
        <div>
            <Logo />
            <div id="login-box" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}


render(
    <Provider store={store}>
        <LoginPage />
    </Provider>
    ,
    document.getElementById('root'));