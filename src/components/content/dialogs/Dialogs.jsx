import React from 'react';
import s from './Dialogs.module.css';
import User from './user/User';

const userData = [
  {id:1, name:"Andrew"},
  {id:2, name:"Katya"},
  {id:3, name:"Nastya"},
  {id:4, name:"Peter"},
];

function Dialogs(){
  return (
    <div className={s.main}>
      <div className={s.users}>
         <User data={userData} />
      </div>
      <div className={s.dialogs}>
          Текст
      </div>
    </div>
  );
}
export default Dialogs;
