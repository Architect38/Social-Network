import React from 'react';
import s from './Menu.module.css';

function Menu(){
  return (
    <div className={s.menu}>
      <div><a href="/profile">Profile</a></div>
      <div><a href="/dialogs">Dialogs</a></div>
      <div><a href="#">About</a></div>
    </div>
  );
}
export default Menu;