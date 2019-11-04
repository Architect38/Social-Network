import React from 'react';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

class Menu extends React.Component{
  render(){
    return (
      <div className={s.main}>
        <div><NavLink exact to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
        <div><NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink></div>
      </div>
    );
  }
  
}
export default Menu;
