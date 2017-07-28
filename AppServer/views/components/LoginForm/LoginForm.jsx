/**
 * Created by matthewxfz on 7/25/17.
 */
import React from 'react';
import "./LoginForm.css"
import MsgBand from "../MsgBand";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg:'hello world', isHidden:true};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //TODO
    }


    handleClick() {
        this.toggleMsg(this.state);
        console.log('this is:', this);
    }

    toggleMsg(state){
        this.setState({
            msg:'toggle message',
            isHidden:!state.isHidden
        })
    }


    setMsg(msg) {
        this.setState({
            msg: msg,
            isHidden: false
        });
    }

    reset() {
        this.setState({
            msg: '',
            isHidden: true
        });
    }

    render() {
       const state = this.state;
        return (
            <div>
                <h2>Login</h2>
                <MsgBand msg={state.msg} isHidden={state.isHidden} />
                <form id="login-form">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <div className="input-group">
                            <input className="form-control" id="account" type="email" placeholder="Enter email"
                                   required="required"/>
                            <span className="input-group-addon">@iit.edu</span></div>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input className="form-control" id="pwd" type="password" placeholder="Enter password"
                               required="required"/></div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Remember me</label></div>
                    <button className="btn btn-default" id="submitBtn" type="button" onClick={this.handleClick}>
                        Submit
                    </button>
                </form>
            </div>

    )}

    }
