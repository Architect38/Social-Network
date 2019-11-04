import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {loginUser} from './../../redux/auth_reducer'
import * as axios from 'axios';

class Header extends React.Component{
  componentDidMount(){ //{withCredentials:true} брать куку из браузера(т.е. если я своем браузере залогинен, то пройду auth)
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials:true}).then(response=>{
      this.props.loginUser(response.data);
    });
  }
  render(){
    return (
      <div className={s.main}>    
        <div className={s.logo}>
          <NavLink to="/profile">
              <img src="/logo.png" align="top"/>
              <span>SocialKek</span>
          </NavLink>
        </div>
        <div className={s.login}>
            {this.props.isAuth==false?<a>Login</a>:<a>{this.props.dataProfile.data.login}</a>}
            {this.props.isAuth==true?<p>(выйти)</p>:""}
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
      dataProfile: state.auth.dataProfile
  }
}

export default connect(mapStateToProps,{loginUser})(Header);