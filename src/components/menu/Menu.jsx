import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

function Menu(){
  return (
    <div className={s.menu}>
      <div><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
      <div><NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
      <div><a href="#">Friends</a></div>
    </div>
  );
}
export default Menu;
