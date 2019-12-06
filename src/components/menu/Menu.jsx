import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
  render(){
    return (
      <div className={s.main}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/friends">Users</a></div>
      </div>
    );
  }
}
export default Menu;
