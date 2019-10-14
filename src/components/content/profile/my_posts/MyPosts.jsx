import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

function MyPosts(){
  return (
    <div className={s.item}>
      <textarea placeholder="Write your Post!"></textarea>
      <a href="#">Добавить запись</a>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
export default MyPosts;
