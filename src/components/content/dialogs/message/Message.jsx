import React from 'react';
import s from './Message.module.css';


function Message(props){
    
    let message = props.state.map((item)=>{
        return <p>{item.message}</p>
    });
    return(
        <div className={s.main}>
           {message}
           <textarea></textarea>
           <a href="#">Отправить сообщение</a>
        </div>
    );
}

export default Message;



