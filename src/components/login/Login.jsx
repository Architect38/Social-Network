import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { postLogin } from '../../redux/auth_reducer';
import { required, minLength } from './../../utils/validators';
import InputControl from './../common/form-control/input_control/InputControl'

const minLength5 = minLength(5);
const LoginForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.logo}>
                <img src={process.env.PUBLIC_URL +"/logo.png"} align="top"/>
                <span>SocialKek</span>
            </div>
            <div>
                <Field placeholder="login" name = "login" component={InputControl}
                validate = {[required, minLength5]}/> 
            </div>
            <div>
                <Field placeholder="password" name="password" component={InputControl}
                type="password" validate = {[required]}/> 
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
                <span>Remember me</span> 
            </div>
            {
                props.captchaUrl!=null
                &&<div>
                    <img src={props.captchaUrl}/>
                    <Field name="captcha" component="input" type="input"/>
                  </div>
            }
            
            <p>No account? You can create an <a>account</a></p>
            <div>
                {
                    props.authFetching===false
                    ?<button>Log in</button>
                    :<img src={process.env.PUBLIC_URL +"/preloader"}/>
                }
            </div>
            {props.error && <div className = {s.errorMessage}>{props.error}</div> }
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "login" })(LoginForm);

const Login = (props)=>{

    const onSubmit = (formData)=>{
        //console.log(formData);
        props.postLogin(formData.login, formData.password, formData.rememberMe=false, formData.captcha)
    }
    return(
        <div>
            <div className = {s.main}></div>
            <div className = {s.formOut} style={props.captchaUrl!=null?{height:"450px"}:{}}>
                <LoginReduxForm captchaUrl = {props.captchaUrl} authFetching = {props.authFetching} onSubmit = {onSubmit}/>
            </div>
        </div>  
    );
}

let mapStateToProps = (state) => {
    return {
        authFetching: state.auth.authFetching,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {postLogin})(Login); 
