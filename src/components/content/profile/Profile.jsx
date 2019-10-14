import React from 'react';
import MyPosts from './my_posts/MyPosts';
import s from './Profile.module.css';

function Profile(){
  return (
    <div className={s.main}>
      <MyPosts />
    </div>
  );
}
export default Profile;
