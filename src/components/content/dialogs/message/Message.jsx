import React from 'react';
import s from './Message.module.css';

function Message(props){
    const MyRef = React.createRef();
    return(
        <div className={s.main}>
           {props.messages.map((item)=>{
                return <p>{item.message}</p>
           })}
           <textarea ref = {MyRef}></textarea>
           <a href="#" onClick = {(e)=>{
               props.addMessage(MyRef.current.value);
               e.preventDefault();
               MyRef.current.value = '';
            }}>
               Отправить сообщение
           </a>
        </div>
    );
}

export default Message;



