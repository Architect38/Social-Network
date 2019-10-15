import React from 'react';
import s from './MyPosts.module.css';

function MyPosts(props){
  let posts = props.state.map((item)=>{
      return(
        <div className={s.post}>
          <img src='\avatar.jpg'/>
          <p>{item.post}</p>
        </div>
      );
  });

  return (
    <div className={s.main}>
      <textarea placeholder="Write your Post!"></textarea>
      <a href="#">Добавить запись</a>

      <div className={s.posts}>
          {posts}
      </div>
    </div>
  );
}
export default MyPosts;
