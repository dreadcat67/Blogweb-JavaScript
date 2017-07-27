/**
 * Created by matthewxfz on 7/25/17.
 */
import react from 'react';
import LoginForm from "../LoginForm/LoginForm.jsx";
import Logo from "../Logo/Logo.jsx";
import 'css!./LoginBlock.css';

if (module.hot) {
    console.log('module hot is online');
}


function LoginPage() {
    return (
        <div>
            <div id="title-box" className="jumbotron text-center">
                <Logo />
            </div>
            <div id="login-box" className="container-fluid">
                <div className="row">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}


ReactDOM.render(React.createElement(LoginPage, null), document.getElementById('root'));