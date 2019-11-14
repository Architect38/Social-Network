import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { postLogin } from '../../redux/auth_reducer';

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
                <Field placeholder="password" name="password" component="input"/> 
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
                <span>Remember me</span> 
            </div>
            <p>No account? You can create an <a>account</a></p>
            <div>
                {
                    props.authFetching===false
                    ?<button>Log in</button>
                    :<img src="/preloader"/>
                }
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "login" })(LoginForm);

const Login = (props)=>{

    const onSubmit = (formData)=>{
        //console.log(formData);
        props.postLogin(formData.login, formData.password, formData.rememberMe=false)
    }
    return(
        
        <div>
        <div className = {s.main}>
        </div>
        <div className = {s.formOut}>
            <LoginReduxForm authFetching = {props.authFetching} onSubmit = {onSubmit}/>
        </div>
        </div>
        
    );
}

let mapStateToProps = (state) => {
    return {
        authFetching: state.auth.authFetching,
    }
}
export default connect(mapStateToProps, {postLogin})(Login); 

