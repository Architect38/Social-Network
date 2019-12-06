import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../redux/auth_reducer';

class Header extends React.Component{
  render(){
    return (
      <div className={s.main}>    
        <div className={s.logo}>
          <a href="/profile">
              <img src="/logo.png" align="top"/>
              <span>SocialKek</span>
          </a>
        </div>
        <div className={s.search}>
            <input type="text" placeholder="Искать здесь..."/>
            <img src = "/search_header.png"/>
        </div>
        <div className={s.login}>
            <a>{this.props.dataProfile.data.login}</a>
            <p onClick = {this.props.logout}>(выйти)</p>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
      dataProfile: state.auth.dataProfile
  }
}

export default connect(mapStateToProps, {logout})(Header);