import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';



const authRedirect = (Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if (this.props.isAuth===false) return <Redirect to="/login"/>
            return(
             <Component {...this.props}/>
            );
        }
    }
    let mapToStateAuth = (state)=>{
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapToStateAuth)(RedirectComponent);
}

export default authRedirect;