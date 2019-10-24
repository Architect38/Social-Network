import React from 'react';
import s from './Dialogs.module.css';
import User from './user/User';
import Message from './message/Message';

function Dialogs(props){
  return (
    <div className={s.main}>
      <div className={s.users}>
         <User state={props.state.users} />
      </div>
      <div className={s.dialogs}>
          <Message state={props.state.messages} dispatch = {props.dispatch}/>
      </div>
    </div>
  );
}
export default Dialogs;
