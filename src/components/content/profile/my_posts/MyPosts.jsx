import React from 'react';
import s from './MyPosts.module.css';

let MyRef = React.createRef();


function MyPosts(props){
  let posts = props.state.map((item)=>{
      return(
        <div className={s.post}>
          <img src='\avatar.jpg'/>
          <p>{item.post}</p>
        </div>
      );
  });
 
  function addPost(e){
    props.addPost(MyRef.current.value);
    e.preventDefault();
    MyRef.current.value = '';
  }
  function changePost(){
    props.changePost(MyRef.current.value);
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
