import React from 'react';
import s from './Friends.module.css'

function Friends(props){
    return(
        <div className ={s.main}>
           {props.friends.map((item)=>{
               return (
                   <div key={item.id} className = {s.friend}>
                       <img src='avatar_friend.png' align="top"/>
                       <p>{item.firstName} {item.lastName}<br/><br/>
                       <a href="#" className={item.follow ? s.follow : s.unfollow} data-id={item.id} onClick={(e)=>{ props.follow(e)}}>{item.follow ? "follow" : "unfollow"}</a>
                       </p>
                   </div> 
               );
           })} 
        </div>
    );
}

export default Friends;