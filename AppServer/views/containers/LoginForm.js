/**
 * Created by matthewxfz on 7/30/17.
 */
import {connect} from 'react-redux';
import {ToggleMsg} from '../actions/common';
import LoginFormV from '../components/LoginForm/LoginForm.jsx';

const mapStateToProps = state =>{
    console.log('In container'+JSON.stringify(state.alert));
    return {
        alert: state.alert,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoginClick: alert =>{
            dispatch(ToggleMsg())
        }
    }
}

const LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginFormV)


export default LoginForm;
