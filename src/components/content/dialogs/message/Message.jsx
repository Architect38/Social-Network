import React from 'react';
import s from './Message.module.css';
import { addMessageActionCreator } from '../../../../redux/dialogs_reducer';

const MyRef = React.createRef();
function Message(props){
    
    let message = props.state.map((item)=>{
        return <p>{item.message}</p>
    });

    function addMessage(e){
       let action = addMessageActionCreator(MyRef.current.value);
       props.dispatch(action);
       e.preventDefault();
       MyRef.current.value = '';
    }
    return(
        <div className={s.main}>
           {message}
           <textarea ref = {MyRef}></textarea>
           <a href="#" onClick = {addMessage}>Отправить сообщение</a>
        </div>
    );
}

export default Message;



