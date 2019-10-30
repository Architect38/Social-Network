import React from 'react';
import s from './Profile.module.css';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo/>
      <MyPosts posts = {props.posts} addPost={props.addPost}/>
    </div>
  );
}
export default Profile;
