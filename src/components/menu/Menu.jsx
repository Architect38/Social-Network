import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
  render(){
    return (
      <div className={s.main}>
        <div><NavLink to="/Social-Network/profile">Profile</NavLink></div>
        <div><NavLink to="/Social-Network/friends">Users</NavLink></div>
        <div><NavLink to="/Social-Network/friends">Dialogs</NavLink></div>
        <div><NavLink to="/Social-Network/friends">Music</NavLink></div>
        <div><NavLink to="/Social-Network/friends">News</NavLink></div>
        <div><NavLink to="/Social-Network/friends">Settings</NavLink></div>
      </div>
    );
  }
}
export default Menu;
