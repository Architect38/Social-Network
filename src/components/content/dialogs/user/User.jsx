import React from 'react';
import s from './User.module.css';


function User(props){
  return (
    <div className={s.main}>
        {props.users.map((item)=>{
          return <a href="#">{item.name}</a>
        })}
    </div>
  );
}
export default User;
