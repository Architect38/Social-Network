import React from 'react';
import s from './MyPosts.module.css';
import { addPostActionCreator, changePostActionCreator } from './../../../../redux/profile_reducer';



let MyRef = React.createRef();


function MyPosts(props){
  let posts = [];
  for (let i = props.state.length-1;i>=0;i--){
      posts.push(
        <div className={s.post}>
          <img src ='avatar.jpg' className={s.avatar}/>
          <p className={s.text_post}>{props.state[i].post}</p>
        </div>);
  }
  function addPost(e){
    let action = addPostActionCreator(MyRef.current.value);
    if (MyRef.current.value!="") props.dispatch(action);
    e.preventDefault();
    MyRef.current.value = '';
  }
  function changePost(){
    
    let action = changePostActionCreator();
    props.dispatch(action);
  }

  return (
    <div className={s.main}>
      <textarea placeholder="Write your Post!" onChange={changePost} ref = {MyRef}></textarea>
      <a href="#" onClick={addPost}>Добавить запись</a>
      <div className={s.posts}>
          {posts}
      </div>
    </div>
  );
}
export default MyPosts;
