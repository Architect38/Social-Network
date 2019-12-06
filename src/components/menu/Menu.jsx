import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
  render(){
    return (
      <div className={s.main}>
        <div><NavLink to="/profile">Profile</NavLink></div>
        <div><NavLink to="/friends">Users</NavLink></div>
        <div><NavLink to="/friends">Dialogs</NavLink></div>
        <div><NavLink to="/friends">Music</NavLink></div>
        <div><NavLink to="/friends">News</NavLink></div>
        <div><NavLink to="/friends">Settings</NavLink></div>
      </div>
    );
  }
}
export default Menu;
