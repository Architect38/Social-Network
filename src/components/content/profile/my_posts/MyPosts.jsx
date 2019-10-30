import React from 'react';
import s from './MyPosts.module.css';

function MyPosts(props){

  let MyRef = React.createRef();
  return (
    <div className={s.main}>
      <textarea placeholder="Write your Post!"  ref = {MyRef}></textarea>
      <a href="#" onClick={(e)=>{
        props.addPost(MyRef.current.value);
        e.preventDefault();
        MyRef.current.value = ""; 
      }}>
        Добавить запись
      </a>
      {props.posts.map((item,i,arr)=>{
        return(
          <div key = {arr[arr.length-i-1].id} className = {s.post}>
            <img src='avatar.jpg' align='top'/>
            <p>{arr[arr.length-i-1].post}</p>
          </div>
        );
      })}
    </div>
  );
}
export default MyPosts;
