import React from 'react';
import MyPosts from './my_posts/MyPosts';
import s from './Content.module.css';

function Content(){
  return (
    <div className="content">
      <MyPosts />
    </div>
  );
}
export default Content;