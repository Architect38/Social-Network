import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component{
  render(){
    return (
      <div className={s.main}>    
        <div className={s.logo}>
          <NavLink to="/profile">
              <img src="/logo.png" align="top"/>
              <span>SocialKek</span>
          </NavLink>
        </div>
        <div className={s.search}>
            <input type="text" placeholder="Искать здесь..."/>
            <img src = "/search_header.png"/>
        </div>
        <div className={s.login}>
            <a>{this.props.dataProfile.data.login}</a>
            <p>(выйти)</p>
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

export default connect(mapStateToProps)(Header);