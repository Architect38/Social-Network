import React from 'react';
import s from './User.module.css';


function User(props){
  let name = props.users.map((item)=>{
     return <a href="#">{item.name}</a>
  });
  return (
    <div className={s.item}>
        {name}
    </div>
  );
}
export default User;
