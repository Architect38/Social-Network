import React from 'react';
import s from './Message.module.css';

const MyRef = React.createRef();
function Message(props){
    
    let message = props.messages.map((item)=>{
        return <p>{item.message}</p>
    });

    function addMessage(e){
       props.addMessage(MyRef.current.value);
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



