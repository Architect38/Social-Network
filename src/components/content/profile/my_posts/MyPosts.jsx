import React from 'react';
import s from './MyPosts.module.css';



let MyRef = React.createRef();


function MyPosts(props){
  let posts = [];
  for (let i = props.posts.length-1;i>=0;i--){
      posts.push(
        <div className={s.post}>
          <img src ='avatar.jpg' className={s.avatar}/>
          <p className={s.text_post}>{props.posts[i].post}</p>
        </div>);
  }
  
  function addPost(e){
    if (MyRef.current.value!="") props.addPost(MyRef.current.value);
    e.preventDefault();
    MyRef.current.value = "";
  }
  

  return (
    <div className={s.main}>
      <textarea placeholder="Write your Post!" onChange={()=>props.changePost} ref = {MyRef}></textarea>
      <a href="#" onClick={addPost}>Добавить запись</a>
      <div className={s.posts}>
          {posts}
      </div>
    </div>
  );
}
export default MyPosts;
