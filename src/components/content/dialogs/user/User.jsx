import React from 'react';
import s from './User.module.css';


function User(props){
  let id = props.data.map((item,i,arr)=>{
     return <a href="#">{arr[i].id}</a>
  });
  let name = props.data.map((item,i,arr)=>{
     return <a href="#">{arr[i].name}</a>
  });

  return (
    <div className={s.item}>
        {name}
    </div>
  );
}
export default User;
