/**
 * Created by matthewxfz on 7/25/17.
 */
import React from 'react';
import "css!./LoginForm.css"

function LoginForm(){
    return (
        <dvi>
            <form id="login-form">
                <div className="form-group">
                    <label for="email">Email:</label>
                    <div className="input-group">
                        <input className="form-control" id="account" type="email" placeholder="Enter email" required="required" />
                        <span className="input-group-addon">@iit.edu</span></div>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input className="form-control" id="pwd" type="password" placeholder="Enter password" required="required" /></div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"/> Remember me</label></div><button class="btn btn-default" id="submitBtn" type="button">Submit</button></form>
        </dvi>
    )
}

export default LoginForm;