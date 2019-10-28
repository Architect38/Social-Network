import React from 'react';
import s from './Dialogs.module.css';
import User from './user/User';
import Message from './message/Message';

function Dialogs(props){
  debugger;
  return (
    <div className={s.main}>
      <div className={s.users}>
          <User users = {props.users}/>
      </div>
      <div className={s.dialogs}>
          <Message messages = {props.messages} addMessage = {props.addMessage}/>
      </div>
    </div>
  );
}
export default Dialogs;
