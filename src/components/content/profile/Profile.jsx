import React from 'react';
import s from './Profile.module.css';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo/>
      <MyPosts state={props.state} dispatch = {props.dispatch}/>
    </div>
  );
}
export default Profile;
