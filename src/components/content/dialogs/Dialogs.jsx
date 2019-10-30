import React from 'react';
import s from './Dialogs.module.css';
import User from './user/User';
import Message from './message/Message';
import { addMessage } from '../../../redux/dialogs_reducer';
import {connect} from 'react-redux';

function Dialogs(props){
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

function mapStateToProps(state){
  return { 
      messages: state.dialogsPage.messages,
      users: state.dialogsPage.users
  } 
}

export default connect(mapStateToProps, {addMessage})(Dialogs);
