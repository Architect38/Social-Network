import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';

const LoginForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.logo}>
                <img src="/logo.png" align="top"/>
                <span>SocialKek</span>
            </div>
            <div>
                <Field placeholder="login" name = "login" component="input"/> 
            </div>
            <div>
                <Field placeholder="password" name="password" component="input" type="password"/> 
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
                <span>Remember me</span> 
            </div>
            <p>No account? You can create an <a>account</a></p>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "login" })(LoginForm);

const Login = (props)=>{

    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return(
        <div>
        <div className = {s.main}>
        </div>
        <div className = {s.formOut}>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
        </div>
        
    );
}


export default Login;

